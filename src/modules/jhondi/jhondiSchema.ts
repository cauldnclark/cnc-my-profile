import { Schema } from 'mongoose';
import { mongo } from '../../database';
import { IJhondi } from './Document';

const JhondiSchema: Schema<IJhondi> = new Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongo.model<IJhondi>('Jhondi', JhondiSchema);
