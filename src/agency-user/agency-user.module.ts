import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AgencyUserController } from './agency-user.controller';
import { AgencyUserService } from './agency-user.service';
import { AgencyUserRepository } from './agency-user.repository';
import { AgencyUser, AgencyUserSchema } from './schema/agency-user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: AgencyUser.name,
        schema: AgencyUserSchema
      }
    ])
  ],
  controllers: [AgencyUserController],
  providers: [AgencyUserService, AgencyUserRepository]
})
export class AgencyUserModule {}
