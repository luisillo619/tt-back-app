import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Responsible, ResponsibleSchema } from './schema/resposible.schema';
import { PassportModule } from '@nestjs/passport';
import { ResponsibleController } from './responsible.controller';
import { GoogleResponsibleStrategy } from './strategy/responsible.strategy';
import { ResponsibleService } from './responsible.service';
import { ResponsibleRepository } from './responsible.repository';
import { GoogleResponsibleGuard } from './utils/guardian.responsible.google.auth';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Responsible.name,
        schema: ResponsibleSchema,
      },
    ]),
    PassportModule.register({ defaultStrategy: 'googleResponsible' }),
  ],
  controllers: [ResponsibleController],
  providers: [
    ResponsibleService,
    ResponsibleRepository,
    GoogleResponsibleStrategy,
    GoogleResponsibleGuard,
  ],

  exports:[
    ResponsibleService
  ]
})
export class ResponsibleModule {}
