import { Document, Schema } from "mongoose";
import { mongo } from "../../database";

export interface Ken extends Document {
  name:    string;
  age:     number;
  email:   string;
  address: string;
}

const KenSchema: Schema<Ken> = new Schema({
    name: {  type: String, required: true },
    age: { type: Number },
    email: {  type: String },
    address: {type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  },
  { timestamps: true }
);

export default mongo.model<Ken>("Ken", KenSchema);
