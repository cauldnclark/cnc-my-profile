import MarkySchema from "./MarkySchema";
import { UpdateMarky, MarkyCreate } from "./types";
import { Marky } from "./MarkySchema";



export class MarkyService {
  // THESE METHODS ARE FOR MUTATIONS

  async create(args: MarkyCreate): Promise<Marky> {
    const newMarky = new MarkySchema(args);
    return await newMarky.save();
  }

  // THESE METHODS ARE FOR QUERIES

  async findById(id: string): Promise<Marky> {
    const foundMarky = await MarkySchema.findById(id);
    return foundMarky
  }

  async updateMarky(args:UpdateMarky): Promise<Marky> {
    const updateMarky = await MarkySchema.findByIdAndUpdate(args.id, args.input, { new: true });
    return updateMarky
  }

  async findAll(): Promise<Marky[]> {
    const foundMarky = await MarkySchema.find();
    return foundMarky
  }

}