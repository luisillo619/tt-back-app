import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AgencyController } from './agency.controller';
import { AgencyService } from './agency.service';
import { Agency, AgencySchema } from './schema/agency.schema';
import { AgencyRepository } from './agency.repository';
import { AgencyUser } from 'src/agency-user/schema/agency-user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Agency.name,
        schema: AgencySchema,
      },
    ]),
    AgencyUser
  ],
  controllers: [AgencyController],
  providers: [AgencyService, AgencyRepository, AgencyUser],
})
export class AgencyModule {}
