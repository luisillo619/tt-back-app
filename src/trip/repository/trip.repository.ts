import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { BaseRepository } from 'src/repository/base.repository';

import { Trip, TripDocument } from '../schema/trip.schema';

import { Trip as TripInterface } from '../interfaces/Trip';

@Injectable()
export class TripRepository extends BaseRepository<TripInterface> {
  constructor(@InjectModel(Trip.name) _tripModel: Model<TripDocument>) {
    super(_tripModel);
  }
}
