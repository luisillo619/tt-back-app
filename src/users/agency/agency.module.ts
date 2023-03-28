import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';

import { AgencyService } from './agency.service';
import { Agency, AgencySchema } from './schema/agency.schema';
import { AgencyController } from './agency.controller';
import { AgencyUserModule } from '../../agency-user/agency-user.module';
import {
  AgencyUser,
  AgencyUserSchema,
} from '../../agency-user/schema/agency-user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Agency.name, schema: AgencySchema },
      { name: AgencyUser.name, schema: AgencyUserSchema },
    ]),
  ],
  controllers: [AgencyController],
  providers: [AgencyService],
  exports: [AgencyService, MongooseModule],
})
export class AgencyModule {}
