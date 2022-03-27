/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import axios, { AxiosResponse, AxiosError } from 'axios';
import { of } from 'await-of';
import { ChannelInterface } from './state';

export default {
  getChannels() {
    // return of(axios.get('/api/channels'));

    return of(new Promise<AxiosResponse<Array<ChannelInterface>>>((res) => setTimeout(() => res({
      data: [
        {
          id: 'new-channel',
          adminId: 'afaff130-8g21-1dbf-92d9-937sss3bcd40',
          name: 'New Channel Example',
          isPrivate: false
        },
        {
          id: 'test-1',
          adminId: 'afaff130-8g21-1dbf-92d9-937sss3bcd40',
          name: 'Channel Name 1',
          isPrivate: false
        },
        {
          id: 'test-2',
          adminId: 'a0e0f130-8c21-11df-92d9-95795a3bcd40',
          name: 'Channel Name 2',
          isPrivate: true
        },
        {
          id: 'test-3',
          adminId: 'afaff130-8g21-1dbf-92d9-937sss3bcd40',
          name: 'Channel Name 3',
          isPrivate: false
        },
        {
          id: 'test-4',
          adminId: 'afaff130-8g21-1dbf-92d9-937sss3bcd40',
          name: 'Channel Name 4',
          isPrivate: false
        },
        {
          id: 'test-5',
          adminId: 'afaff130-8g21-1dbf-92d9-937sss3bcd40',
          name: 'Channel Name 5',
          isPrivate: false
        },
        {
          id: 'test-6',
          adminId: 'afaff130-8g21-1dbf-92d9-937sss3bcd40',
          name: 'Channel Name 6',
          isPrivate: false
        },
        {
          id: 'test-7',
          adminId: 'afaff130-8g21-1dbf-92d9-937sss3bcd40',
          name: 'Channel Name 7',
          isPrivate: false
        },
        {
          id: 'test-8',
          adminId: 'afaff130-8g21-1dbf-92d9-937sss3bcd40',
          name: 'Channel Name 8',
          isPrivate: false
        },
        {
          id: 'test-9',
          adminId: 'afaff130-8g21-1dbf-92d9-937sss3bcd40',
          name: 'Channel Name 9',
          isPrivate: false
        },
        {
          id: 'test-10',
          adminId: 'afaff130-8g21-1dbf-92d9-937sss3bcd40',
          name: 'Channel Name 10',
          isPrivate: true
        },
        {
          id: 'test-11',
          adminId: 'afaff130-8g21-1dbf-92d9-937sss3bcd40',
          name: 'Channel Name 11',
          isPrivate: false
        },
        {
          id: 'test-12',
          adminId: 'afaff130-8g21-1dbf-92d9-937sss3bcd40',
          name: 'Channel Name 12',
          isPrivate: false
        },
        {
          id: 'test-13',
          adminId: 'afaff130-8g21-1dbf-92d9-937sss3bcd40',
          name: 'Channel Name 13',
          isPrivate: true
        },
        {
          id: 'test-14',
          adminId: 'afaff130-8g21-1dbf-92d9-937sss3bcd40',
          name: 'Channel Name 14',
          isPrivate: false
        },
        {
          id: 'test-15',
          adminId: 'afaff130-8g21-1dbf-92d9-937sss3bcd40',
          name: 'Channel Name 15',
          isPrivate: false
        },
        {
          id: 'test-16',
          adminId: 'afaff130-8g21-1dbf-92d9-937sss3bcd40',
          name: 'Channel Name 16',
          isPrivate: false
        },
        {
          id: 'test-17',
          adminId: 'afaff130-8g21-1dbf-92d9-937sss3bcd40',
          name: 'Channel Name 17',
          isPrivate: false
        },
        {
          id: 'test-18',
          adminId: 'afaff130-8g21-1dbf-92d9-937sss3bcd40',
          name: 'Channel Name 18',
          isPrivate: false
        },
        {
          id: 'test-19',
          adminId: 'afaff130-8g21-1dbf-92d9-937sss3bcd40',
          name: 'Channel Name 19',
          isPrivate: false
        },
        {
          id: 'test-20',
          adminId: 'afaff130-8g21-1dbf-92d9-937sss3bcd40',
          name: 'Channel Name 20',
          isPrivate: true
        }
      ],
      status: 200,
      statusText: 'OK',
      headers: '',
      config: {}
    }), 100)));
  }
};
