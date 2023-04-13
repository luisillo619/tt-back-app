import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/repository/base.repository';
import { Tourist, TouristDocument } from './schema/tourist.schema';

@Injectable()
export class TouristRepository extends BaseRepository<TouristDocument> {
  constructor(@InjectModel(Tourist.name) _touristDocument: Model<TouristDocument>) {
    super(_touristDocument);
  }
}
