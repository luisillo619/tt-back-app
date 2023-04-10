import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GoogleStrategy } from 'src/auth-google/utils/GoogleStrategy';
import { SessionSerializer } from 'src/auth-google/utils/Serializer';
import { Responsible, ResponsibleSchema } from './schema/resposible.schema';
import { ResponsibleController } from './responsible.controller';
import { AuthResponsibleService } from './responsible.authService';
import { ResponsibleRepository } from './responsible.repository';
import { ResponsibleService } from './responsible.service';


@Module({
  imports: [
    MongooseModule.forFeature([
      // FORFEATURE SE UTILIZA PARA PODER INYECTAR EL MODELO EN DIFERENTES PARTES DEL MODULO Y PERMITE INTERACTUAR CON MONGO ATLAS
      {
        name: Responsible.name,
        schema: ResponsibleSchema,
      },
    ]),
  ],
  controllers: [ResponsibleController],
  providers: [
    GoogleStrategy,
    SessionSerializer,
    // esto es lo que va a cambiar y lo que hace dinamico a el google auth
    {
      provide: 'AUTH_SERVICE',
      useClass: AuthResponsibleService,
    },
    ResponsibleRepository,
    ResponsibleService
  ],
})
export class ResponsibleModule {}
