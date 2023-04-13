import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TouristController } from './tourist.controller';
import { TouristService } from './tourist.service';
import { TouristRepository } from './tourist.repository';
import { Tourist, TouristSchema } from './schema/tourist.schema';

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
  providers: [TouristService, TouristRepository]
})
export class TouristModule {}
