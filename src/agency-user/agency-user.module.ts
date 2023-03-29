import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AgencyModule } from '../users/agency/agency.module';
import { AgencyService } from '../users/agency/agency.service';

import { AgencyUserService } from './agency-user.service';
import { AgencyUserController } from './agency-user.controller';

import { AgencyUserSchema, AgencyUser } from './schema/agency-user.schema';

@Module({
  imports: [
    AgencyModule,
    MongooseModule.forFeature([
      {
        name: AgencyUser.name,
        schema: AgencyUserSchema
      }
    ])
  ],
  controllers: [AgencyUserController],
  providers: [AgencyUserService, AgencyService]
})
export class AgencyUserModule {}
