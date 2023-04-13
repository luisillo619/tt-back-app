import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { Tourist } from './schema/tourist.schema';
import { TouristSchema } from './schema/tourist.schema';
import { TouristController } from './tourist.controller';
import { TouristRepository } from './tourist.repository';
import { TouristService } from './tourist.service';
import { GoogleTouristGuard } from './utils/guardian.tourist.google.auth';
import { GoogleTouristStrategy } from './strategy/tourist.strategy';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Tourist.name,
        schema: TouristSchema,
      },
    ]),
    PassportModule.register({ defaultStrategy: 'googleTourist' }),
  ],
  controllers: [TouristController],
  providers: [
    TouristService,
    TouristRepository,
    GoogleTouristStrategy,
    GoogleTouristGuard,
  ],

  exports:[
    TouristService
  ]
})
export class TouristModule {}
