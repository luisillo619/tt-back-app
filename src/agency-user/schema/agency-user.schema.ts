import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AgencyUserDocument = HydratedDocument<AgencyUser>;
@Schema()
export class AgencyUser {
  //   @Prop(required: true)
  //   @Prop(unique: true)
  //   @Prop(default: 'El nombre por defecto')
  @Prop()
  agencyUserId: number;

  @Prop()
  agencyUserName: string;

  @Prop()
  password: string;

  @Prop()
  email: string;

  @Prop()
  transportIds: string;

  @Prop()
  roleId: string;

  @Prop()
  phoneNumber: number;

  @Prop()
  isActive: boolean;
}

export const AgencyUserSchema = SchemaFactory.createForClass(AgencyUser);
