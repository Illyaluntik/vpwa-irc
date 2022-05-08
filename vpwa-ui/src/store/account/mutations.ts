import { MutationTree } from 'vuex';
import { ChannelInterface } from '../channels/state';
import {
  AccountStateInterface, Account, AccountLoginData, AccountRegisterData
} from './state';

interface LoginDataPayload {
  field: 'username' | 'password',
  value: string
}

interface RegisterDataPayload {
  field: 'fullName' | 'email' | 'username' | 'password',
  value: string
}

const mutation: MutationTree<AccountStateInterface> = {
  updateLoginData: (state, payload: LoginDataPayload) => state.loginData[payload.field] = payload.value,
  resetLoginForm: (state, loginData?: AccountLoginData) => state.loginData = {
    username: loginData?.username ?? '', password: loginData?.password ?? ''
  },
  updateRegisterData: (state, payload: RegisterDataPayload) => state.registerData[payload.field] = payload.value,
  resetRegisterForm: (state, registerData?: AccountRegisterData) => state.registerData = {
    fullName: registerData?.fullName ?? '', email: registerData?.email ?? '', username: registerData?.username ?? '', password: registerData?.password ?? ''
  },
  setUser: (state, dto: Account) => state.account = dto,
  setUserStatus: (state, status: 'online' | 'offline' | 'dnd') => state.status = status,
  setChannels(state, channels: Array<ChannelInterface>) {
    state.channels = channels;
  },
  busy: (state, value: boolean) => state.state.busy = value,
  newChannel(state, channel: ChannelInterface) {
    state.channels?.unshift(channel);
  },
  removeChannel(state, channel: ChannelInterface) {
    const cIndex = state.channels?.findIndex((element) => element.id === channel.id);
    console.log(cIndex);
    // const cIndex = state.channels?.indexOf(channel, 0);
    if (cIndex !== undefined) {
      state.channels?.splice(cIndex, 1);
    }
  }
};

export default mutation;
