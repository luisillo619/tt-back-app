/* eslint-disable prettier/prettier */
import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { Prop } from '@nestjs/mongoose/dist';
import mongoose, { ObjectId, Document } from 'mongoose';
import { AgencyUser } from 'src/agency-user/schema/agency-user.schema';

export type AgencyDocument = Agency & Document;

@Schema()
export class Agency {
  @Prop({ type: mongoose.Types.ObjectId })
  _id: string;
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;
  @Prop({ required: true })
  password: string;
  @Prop()
  phoneNumber: number;
  @Prop()
  legalTax: string;
  @Prop()
  isActive: boolean;
  @Prop()
  AgencyPayment: string[];
  @Prop()
  planType: string;
  @Prop()
  guide: ObjectId;
  @Prop()
  responsable: ObjectId;
  @Prop()
  banners: ObjectId[];
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'AgencyUser' }] })
  agencyUsers: AgencyUser[];
  @Prop()
  sellers: ObjectId[];
  @Prop()
  invitationSended: ObjectId[];
  @Prop()
  trip: ObjectId[];
}

export const AgencySchema = SchemaFactory.createForClass(Agency);
