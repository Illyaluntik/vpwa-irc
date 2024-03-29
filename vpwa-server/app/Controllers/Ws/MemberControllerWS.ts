/* eslint-disable @typescript-eslint/explicit-member-accessibility */
/* eslint-disable @typescript-eslint/indent */
import Database from '@ioc:Adonis/Lucid/Database'
import type { WsContextContract } from '@ioc:Ruby184/Socket.IO/WsContext'
import Ban from 'App/Models/Ban'
import Channel from 'App/Models/Channel'
import Member from 'App/Models/Member'
import User from 'App/Models/User'

export default class MembersController {
    async leaveChannel({ auth }: WsContextContract, name: string) {
        const userId = auth.user?.id
        const channelId = await (await Channel.findByOrFail('channel_name', name)).id

        const channel = await Channel.find(channelId)

        if (channel?.admin === userId) {
            await Member.query().where('channel_id', channelId).delete()
            await channel?.delete()
            return null
        } else {
            const membership = await Member.findBy('channel_id', channelId)
            await membership?.delete()
            return channel
        }
    }

    async loadMembers({ params }: WsContextContract) {
        const id = await (await Channel.findByOrFail('channel_name', params.name)).id
        const members = await Database
            .from('users')
            .join('members', 'members.user_id', '=', 'users.id')
            .select('users.id', 'users.username')
            .where('members.channel_id', id)
        return members
    }

    async addMember({ params, auth, socket }: WsContextContract, newUser: string) {
        const user = await User.findByOrFail('username', newUser)
        const channel = await (await Channel.findByOrFail('channel_name', params.name))
        const member = await Member.query().where('user_id', user.id).where('channel_id', channel.id).first()
        console.log(member)

        if (member !== null) {
            return null
        }

        // ban check
        const banned = await Ban.query().where('banned_user', user!.id).where('banned_in', channel.id).first()
        if (banned !== null) {
            if (auth.user?.id !== channel.admin) {
                return null
            } else {
                await Ban.query().where('banned_user', user!.id).where('banned_in', channel.id).delete()
            }
        }

        if ((channel.isPrivate && channel.admin === auth.user?.id) || !channel.isPrivate) {
            // verify if there is same member in channel
            await Member.create({
                userId: user?.id,
                channelId: channel?.id,
                accepted: false,
            })
        }

        socket.broadcast.emit('newMember', user)
        return user
    }
}
