import { Module } from '@nestjs/common';

import { TripAdapter } from './trip.adapter';
import { TripService } from './trip.service';

@Module({
  providers: [TripAdapter, TripService]
})
export class TripModule {}
