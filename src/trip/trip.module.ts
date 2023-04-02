import { MiddlewareConsumer, Module } from '@nestjs/common';
import { DecodeUserMiddleware } from '../middlewares/decodeUser.middleware';

import { TripAdapter } from './trip.adapter';
import { TripService } from './trip.service';

@Module({
  providers: [TripAdapter, TripService]
})
export class TripModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(DecodeUserMiddleware).forRoutes('*');
  }
}
