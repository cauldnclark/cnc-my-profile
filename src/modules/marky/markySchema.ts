import { Document, Schema } from "mongoose";
import { mongo } from "../../database";

export interface Marky extends Document {
  name:       string;
  age:        number;
  email:      string;
  facebook:   string;
}

const MarkySchema: Schema<Marky> = new Schema({
    name: {  type: String, required: true },
    age: { type: Number },
    email: { type: String },
    facebook: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  },
  { timestamps: true }
);

export default mongo.model<Marky>("Marky", MarkySchema);
                                // Marky becomes markies in mongodb -.-
