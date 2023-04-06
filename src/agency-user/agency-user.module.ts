import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AgencyUserController } from './agency-user.controller';
import { AgencyUserService } from './agency-user.service';

import { AgencyUserSchema, AgencyUser } from './schema/agency-user.schema';
import { AgencyModule } from '../users/agency/agency.module';
import { AgencyService } from '../users/agency/agency.service';
import { Agency, AgencySchema } from '../users/agency/schema/agency.schema';

//
@Module({
  imports: [
    AgencyModule,
    MongooseModule.forFeature([
      {
        name: AgencyUser.name,
        schema: AgencyUserSchema,
      },
      {
        name: Agency.name,
        schema: AgencySchema,
      },
    ]),
  ],
  controllers: [AgencyUserController],
  providers: [AgencyUserService],
  exports: [AgencyUserService],
})
export class AgencyUserModule {}
