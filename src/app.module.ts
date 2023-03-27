import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { AgencyModule } from './users/agency/agency.module';
import { BannerModule } from './banner/banner.module';
import { SellerModule } from './seller/seller.module';
import { TripModule } from './trip/trip.module';
import { RoleModule } from './role/role.module';
import { AdminModule } from './admin/admin.module';
import { AgencyUserModule } from './agency-user/agency-user.module';
import { InvitationModule } from './invitation/invitation.module';
import { ChatModule } from './chat/chat.module';
import { TouristModule } from './tourist/tourist.module';
import { ClaimModule } from './claim/claim.module';
import { ResponsibleModule } from './responsible/responsible.module';
import { AuthModule } from './auth/auth.module';
import { RepositoryModule } from './repository/repository.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true
    }),
    MongooseModule.forRoot(process.env.MONGODB_URI),
    AgencyModule,
    BannerModule,
    SellerModule,
    TripModule,
    RoleModule,
    AdminModule,
    AgencyUserModule,
    InvitationModule,
    ChatModule,
    TouristModule,
    ClaimModule,
    ResponsibleModule,
    AuthModule,
    RepositoryModule
  ],

  controllers: [],
  providers: []
})
export class AppModule {}
