import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GoogleStrategy } from 'src/auth-google/utils/GoogleStrategy';
import { AuthGoogleController } from 'src/auth-google/auth-google.controller';
import { SessionSerializer } from 'src/auth-google/utils/Serializer';
import { ResponsibleController } from './responsible.controller';
import { ResponsibleService } from './responsible.service';
import { Responsible, ResponsibleSchema } from './schema/resposible.schema';
import { ResponsibleRepository } from './responsible.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Responsible.name,
        schema: ResponsibleSchema,
      },
    ]),
  ],
  controllers: [ResponsibleController, AuthGoogleController],
  providers: [
    GoogleStrategy,
    SessionSerializer,

    {
      provide: 'AUTH_SERVICE',
      useClass: ResponsibleService,
    },
    ResponsibleRepository,
  ],
})
export class ResponsibleModule {}
