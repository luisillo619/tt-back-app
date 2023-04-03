import { Module } from '@nestjs/common';
import { AgencyController } from './agency.controller';
import { AgencyService } from './agency.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Agency, AgencySchema } from './schema/agency.schema';


@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Agency.name, schema: AgencySchema
      }
    ])
  ],
  controllers: [AgencyController],
  providers: [AgencyService]
})

export class AgencyModule {}
