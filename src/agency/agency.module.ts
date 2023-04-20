import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AgencyController } from './agency.controller';
import { AgencyService } from './agency.service';
import { Agency, AgencySchema } from './schema/agency.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Agency.name,
        schema: AgencySchema,
      },
    ]),
  ],
  controllers: [AgencyController],
  providers: [AgencyService],
})
export class AgencyModule {}
