import { HydratedDocument } from 'mongoose';

import { Prop, Schema } from '@nestjs/mongoose';

import { ObjectId } from '../../utils/database.utils';

export type TripDocument = HydratedDocument<Trip>;

@Schema()
export class Trip {
  @Prop()
  name: string;

  @Prop({ type: ObjectId, ref: 'Agency', required: true })
  agencyId: string;

  @Prop({ required: true })
  country: string;

  @Prop({ required: true })
  province: string;

  @Prop({ required: true })
  departure: Date;

  @Prop({ required: true })
  arrival: Date;

  @Prop()
  price: string;

  @Prop()
  distance: string;

  @Prop()
  suggestion: string;
}
