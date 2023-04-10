import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-google-oauth20';
import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy) {
  constructor(@Inject('AUTH_SERVICE') private readonly service) {
    super({
      proxy: true,
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: `${process.env.API_URL}/api/auth/google/redirect`,
      scope: ['profile', 'email'], //definido en la pantalla de consentimiento de la consola de google
      prompt: 'select_account consent',
    });
  }

  // METODO 2 PARA PROMPT SELECT_ACCOUNT
  // authorizationParams(options: any): object {
  //     return Object.assign(options,{
  //       prompt: "select_account"
  //     })
  // }

  async validate(accessToken: string, refreshToken: string, profile: Profile) {
    const user = await this.service.validateUser({
      email: profile.emails[0].value,
      fullName: profile.displayName,
      subject: profile.id,
      provider: profile.provider,
      picture: profile._json.picture,
    });
    console.log('validate');
    return user || null;
  }
}
