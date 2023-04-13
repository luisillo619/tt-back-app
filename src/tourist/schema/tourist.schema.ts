import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, ObjectId } from 'mongoose';

export type TouristDocument = HydratedDocument<Tourist>;

@Schema()
export class Tourist {
  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  email: string;

  @Prop()
  phoneNumber: string;

  @Prop()
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
  resetTokenExpiresAt: Date;

  @Prop({required:true})
  role: string;

  @Prop({ required: true })
  provider: string

  @Prop({ required: true })
  subject: string
}

export const TouristSchema = SchemaFactory.createForClass(Tourist);
