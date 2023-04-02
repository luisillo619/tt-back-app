import { Injectable } from '@nestjs/common';

import { TripService } from './trip.service';

import { CreateTripDTO } from './dto/create-trip.dto';
import { Trip } from './interfaces/Trip';

@Injectable()
export class TripAdapter {
  constructor(private readonly _tripService: TripService) {}

  async createTrip(dto: CreateTripDTO) {
    const { ...newTrip } = dto;

    return this._tripService.create(newTrip as Trip);
  }
}
