import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, ObjectId } from 'mongoose';

export type TouristDocument = HydratedDocument<Tourist>;

@Schema()
export class Tourist {
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  phoneNumber: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  tripList: string[];

  @Prop()
  hotel: string;

  @Prop()
  passport: string;

  @Prop()
  payment: boolean;

  @Prop()
  agencyIds: ObjectId[];

  @Prop()
  responsibleAssociated: mongoose.Schema.Types.ObjectId;

  @Prop()
  resetToken: string;

  @Prop()
  googleId: string;

  @Prop()
  resetTokenExpiresAt: Date;
}

export const TouristSchema = SchemaFactory.createForClass(Tourist);
