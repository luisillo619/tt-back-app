import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AgencyUserService } from './agency-user.service';
import { AgencyUserController } from './agency-user.controller';

import { AgencyUserSchema, AgencyUser } from './schema/agency-user.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: AgencyUser.name, schema: AgencyUserSchema }])],
  controllers: [AgencyUserController],
  providers: [AgencyUserService]
})
export class AgencyUserModule {}
