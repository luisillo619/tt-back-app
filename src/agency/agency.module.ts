import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AgencyService } from './agency.service';
import { AgencyController } from './agency.controller';

import { Agency, AgencySchema } from './schema/agency.schema';
import { AgencyRepository } from './repository/agency.repository';

@Module({
  imports: [MongooseModule.forFeature([{ name: Agency.name, schema: AgencySchema }])],
  controllers: [AgencyController],
  providers: [AgencyService, AgencyRepository],
  exports: [AgencyService, MongooseModule]
})
export class AgencyModule {}
