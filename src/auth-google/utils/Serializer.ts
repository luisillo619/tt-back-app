import { PassportSerializer } from '@nestjs/passport';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(@Inject('AUTH_SERVICE') private readonly service) {
    super();
  }

  serializeUser(user: any, done: Function) {
    done(null, user);
  }

  async deserializeUser(payload: any, done: Function) {
    const user = await this.service.findById(payload._id);
    return user ? done(null, user) : done(null, null);
  }
}
