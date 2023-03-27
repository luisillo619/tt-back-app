import { HydratedDocument } from 'mongoose';

import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';

import { AgencyUser } from 'src/agency-user/schema/agency-user.schema';

import { ObjectId } from '../utils/database.utils';

export type AgencyDocument = HydratedDocument<Agency>;

@Schema()
export class Agency {
  @Prop()
  name: string;

  @Prop({ unique: true })
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
  guide: string;

  @Prop()
  responsable: string;

  @Prop()
  banners: string[];

  @Prop({ type: [{ type: ObjectId, ref: 'AgencyUser' }] })
  agencyUsers: AgencyUser[];

  @Prop()
  sellers: string[];

  @Prop()
  invitationSended: string[];

  @Prop()
  trip: string[];
}

export const AgencySchema = SchemaFactory.createForClass(Agency);
