import { Injectable } from '@nestjs/common';
import * as Pusher from 'pusher';

@Injectable()
export class PusherService {
  pusher: Pusher;
  constructor() {
    this.pusher = new Pusher({
      appId: '1861448',
      key: '976651470d83ab057dcd',
      secret: 'a3b9a951f84a2f3bf859',
      cluster: 'eu',
      useTLS: true,
    });
  }
  async trigger(channel: string, event: string, data: any) {
    await this.pusher.trigger(channel, event, data);
  }
}
