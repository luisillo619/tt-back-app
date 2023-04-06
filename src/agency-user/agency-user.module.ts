import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AgencyModule } from '../agency/agency.module';
import { AgencyService } from '../agency/agency.service';

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
