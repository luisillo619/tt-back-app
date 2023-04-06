import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstant } from './jwt.constantes';
import { JwtStrategy } from './jwt.strategy';

import { AuthService } from './auth.service';
import { AuthControllerTourist } from './auth.controller';
import { Tourist, TouristSchema } from '../tourist/schema/tourist.schema';
import { Agency, AgencySchema } from '../agency/schema/agency.schema';


@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Tourist.name, schema: TouristSchema },
      { name: Agency.name, schema: AgencySchema },
    ]),

    JwtModule.register({
      secret: jwtConstant.secret,
      signOptions: { expiresIn: '60m' },    //Expira en '60s', '60m', '60h'
    }),
  ],
  controllers: [AuthControllerTourist],
  providers: [AuthService, JwtStrategy]
})
export class AuthTouristModule {}