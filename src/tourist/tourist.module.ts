import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TouristController } from './tourist.controller';
import { TouristService } from './tourist.service';
import { TouristRepository } from './tourist.repository';
import { Tourist, TouristSchema } from './schema/tourist.schema';
import { GoogleStrategy } from '../auth-google/utils/GoogleStrategy';
import { SessionSerializer } from '../auth-google/utils/Serializer';
import { AuthTouristService } from './tourist.authService';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Tourist.name,
        schema: TouristSchema
      }
    ])
  ],
  controllers: [TouristController],
  providers: [
    GoogleStrategy,
    SessionSerializer,

    {
      provide: 'AUTH_SERVICE',
      useClass: AuthTouristService
    },

    TouristService,
    TouristRepository
  ]
})
export class TouristModule {}
