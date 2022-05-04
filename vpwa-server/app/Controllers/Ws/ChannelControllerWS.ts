/* eslint-disable @typescript-eslint/explicit-member-accessibility */
/* eslint-disable @typescript-eslint/indent */
import type { WsContextContract } from '@ioc:Ruby184/Socket.IO/WsContext'
import Channel from 'App/Models/Channel'
import Member from 'App/Models/Member'

export default class ChannelsController {
  // create new channel
  async createChannel ({ params }: WsContextContract, channelInfo) {
    console.log(channelInfo)
    const channel = await Channel.create({
      channelName: channelInfo.channelName,
      isPrivate: channelInfo.isPrivate,
      admin: channelInfo.adminId,
    })

    const member = await Member.create({
      userId: channelInfo.adminId,
      channelId: channel.id,
    })
    return channel
  }
}