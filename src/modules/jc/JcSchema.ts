import { Document, Schema } from 'mongoose';
import { mongo } from '../../database';
import { Jc } from '../Document';

const JcSchema: Schema<Jc> = new Schema(
  {
    name: { type: String, required: true },
    age: { type: Number },
    email: { type: String },
  },
  { timestamps: true }
);

export default mongo.model<Jc>('Jc', JcSchema);
