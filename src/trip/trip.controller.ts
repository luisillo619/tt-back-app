import { Body, Controller } from '@nestjs/common';

import { CreateTripDTO } from './dto/create-trip.dto';

import { TripAdapter } from './trip.adapter';

@Controller('trip')
export class TripController {
  constructor(private readonly _tripAdapter: TripAdapter) {}

  async createTrip(@Body() body: CreateTripDTO) {
    return this._tripAdapter.createTrip(body);
  }
}
