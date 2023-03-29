import { Types } from 'mongoose';

export type ObjectIdType = Types.ObjectId | string;
export const { ObjectId } = Types;
