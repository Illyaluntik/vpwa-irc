/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import axios, { AxiosResponse, AxiosError } from 'axios';
import { of } from 'await-of';
import { v4 as uuidv4 } from 'uuid';
import {
  AccountLoginData,
  AccountRegisterData,
  AccountDtoInterface,
  AccountInviteInterface
} from './state';

export default {
  // [200, 400]
  login(data: AccountLoginData) {
    return of<AxiosResponse<void> | AxiosError<void>>(axios.post('http://localhost:3000/api/account/login', data));
  },
  // [200, 401]
  logout() {
    // return of<AxiosResponse<void> | AxiosError<void>>(axios.post('/api/account/logout'));

    return of(new Promise<AxiosResponse<void>>((res) => setTimeout(() => res({
      data: undefined,
      status: 200,
      statusText: 'OK',
      headers: '',
      config: {}
    }), 1000)));
  },
  // [201, 400, 403]
  register(data: any) {
    return of<AxiosResponse<void> | AxiosError<void>>(axios.post('http://localhost:3000/api/account/register', data));
  },
  // [200, 401]
  getAccount() {
    // return of<AxiosResponse<AccountDtoInterface> | AxiosError<AccountDtoInterface>>(axios.get('/api/account'));

    // return of(new Promise<AxiosResponse<void>>((res, rej) => setTimeout(() => rej({ code: 404, message: 'error' }), 1000)));

    return of(new Promise<AxiosResponse<AccountDtoInterface>>((res) => setTimeout(() => res({
      data: {
        id: '75d7a00e-57cc-4852-bc36-6ebc58c87ee8',
        username: 'usernameEx1',
        email: 'example@example.com',
        firstName: 'FirstName',
        lastName: 'LastName'
      },
      status: 200,
      statusText: 'OK',
      headers: '',
      config: {}
    }), 100)));
  },
  // [200, 401]
  getInvites() {
    // return of<AxiosResponse<AccountInviteInterface> | AxiosError<AccountInviteInterface>>(axios.get('/api/account/invites'));

    return of(new Promise<AxiosResponse<Array<AccountInviteInterface>>>((res) => setTimeout(() => res({
      data: [
        {
          id: uuidv4(),
          channelId: uuidv4(),
          inviteDate: Date.now()
        },
        {
          id: uuidv4(),
          channelId: uuidv4(),
          inviteDate: Date.now()
        }
      ],
      status: 200,
      statusText: 'OK',
      headers: '',
      config: {}
    }), 1000)));
  }
};
