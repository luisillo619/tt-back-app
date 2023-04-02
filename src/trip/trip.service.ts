import { Injectable } from '@nestjs/common';

import { Trip } from './interfaces/Trip';

import { TripRepository } from './repository/trip.repository';

@Injectable()
export class TripService {
  constructor(private readonly _tripRepository: TripRepository) {}

  async create(trip: Trip) {
    return this._tripRepository.create(trip)
  }
}
