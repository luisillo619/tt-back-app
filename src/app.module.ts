import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AgencyModule } from './users/agency/agency.module';
import { BannerController } from './banner/banner.controller';
import { BannerService } from './banner/banner.service';
import { BannerModule } from './banner/banner.module';
import { SellerController } from './seller/seller.controller';
import { SellerModule } from './seller/seller.module';
import { TripController } from './trip/trip.controller';
import { TripService } from './trip/trip.service';
import { TripModule } from './trip/trip.module';
import { RoleController } from './role/role.controller';
import { RoleService } from './role/role.service';
import { RoleModule } from './role/role.module';
import { AdminController } from './admin/admin.controller';
import { AdminService } from './admin/admin.service';
import { AdminModule } from './admin/admin.module';
import { AgencyUserModule } from './agency-user/agency-user.module';
import { InvitationController } from './invitation/invitation.controller';
import { InvitationService } from './invitation/invitation.service';
import { InvitationModule } from './invitation/invitation.module';
import { ChatController } from './chat/chat.controller';
import { ChatService } from './chat/chat.service';
import { ChatModule } from './chat/chat.module';
import { TouristController } from './tourist/tourist.controller';
import { TouristService } from './tourist/tourist.service';
import { TouristModule } from './tourist/tourist.module';
import { ClaimController } from './claim/claim.controller';
import { ClaimService } from './claim/claim.service';
import { ClaimModule } from './claim/claim.module';
import { ResponsibleController } from './responsible/responsible.controller';
import { ResponsibleModule } from './responsible/responsible.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
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
  ],

  controllers: [],
  providers: [],
})
export class AppModule {}
