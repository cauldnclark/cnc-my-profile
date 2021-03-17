import { Document } from 'mongoose';

export interface IJhondi extends Document {
  name: string;
  age: number;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}
