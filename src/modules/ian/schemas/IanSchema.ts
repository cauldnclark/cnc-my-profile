import { Document, Schema } from 'mongoose';
import { mongo } from '../../../database';


export interface IanInterface extends Document {
  name: string;
  age: number;
  email: string;
}

const IanSchema: Schema<IanInterface> = new Schema(
  
  {
    name: { type: String, required: true },
    age: { type: Number },
    email: { type: String },
  },
  { timestamps: true }
);


export default mongo.model<IanInterface>('Ian', IanSchema);
