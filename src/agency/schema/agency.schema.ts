import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { AgencyUser } from 'src/agency-user/schema/agency-user.schema';

export type AgencyDocument = HydratedDocument<Agency>;

@Schema()
export class Agency {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  cnpj: string;

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
  responsable: string[];

  @Prop()
  banners: string[];

  // Relacion de modelos Agency - UserAgency

  // @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'AgencyUser' }] })
  // agencyUsers: AgencyUser[];  


  @Prop()
  sellers: string[];

  @Prop()
  invitationSended: string[];

  @Prop()
  trip: string[];

  @Prop()
  googleId: string;
}

export const AgencySchema = SchemaFactory.createForClass(Agency);
