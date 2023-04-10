import { PassportSerializer } from '@nestjs/passport';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(@Inject('AUTH_SERVICE') private readonly service) {
    super();
  }

  // si GoogleStrategy retorna un usuario entonces se ejecuta esto:
  serializeUser(user: any, done: Function) {
    done(null, user);
  }

  // Se deserializa cada que entras a cualquier endPoint del modulo o cada que se recarga la pagina
  async deserializeUser(payload: any, done: Function) {
    const user = await this.service.findById(payload._id);
    return user ? done(null, user) : done(null, null);
  }
}
