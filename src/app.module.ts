import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AgencyModule } from './users/agency/agency.module';
import { UsersController } from './users/users.controller';
import { BannerController } from './banner/banner.controller';
import { BannerService } from './banner/banner.service';
import { BannerModule } from './banner/banner.module';
import { Turist,Controller } from './nest/turist,/turist,.controller';
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
import { AgencyUserController } from './agency-user/agency-user.controller';
import { AgencyUserService } from './agency-user/agency-user.service';
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

@Module({
  imports: [AgencyModule, BannerModule, SellerModule, TripModule, RoleModule, AdminModule, AgencyUserModule, InvitationModule, ChatModule, TouristModule, ClaimModule, ResponsibleModule],
  controllers: [AppController, UsersController, BannerController, Turist,Controller, SellerController, TripController, RoleController, AdminController, AgencyUserController, InvitationController, ChatController, TouristController, ClaimController, ResponsibleController],
  providers: [AppService, BannerService, TripService, RoleService, AdminService, AgencyUserService, InvitationService, ChatService, TouristService, ClaimService],
})
export class AppModule {}
