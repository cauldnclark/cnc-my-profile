import { Document, Schema } from 'mongoose';
import { mongo } from '../../database';

export interface AceInterface extends Document {
  name: string;
  age: number;
  email: string;
}

const AceSchema: Schema<AceInterface> = new Schema(
  {
    name: { type: String, required: true },
    age: { type: Number },
    email: { type: String },
  },
  { timestamps: true }
);

export default mongo.model<AceInterface>('Ace', AceSchema);
