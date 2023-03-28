import { Module } from '@nestjs/common';
import { AgencyUserService } from './agency-user.service';
import { AgencyUserController } from './agency-user.controller';
import { MongooseModule } from '@nestjs/mongoose';

import { AgencyUserSchema, AgencyUser } from './schema/agency-user.schema';
import { AgencyModule } from 'src/users/agency/agency.module';
import { AgencyService } from 'src/users/agency/agency.service';
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
    ]),
  ],
  controllers: [AgencyUserController],
  providers: [AgencyUserService, AgencyService],
})
export class AgencyUserModule {}
