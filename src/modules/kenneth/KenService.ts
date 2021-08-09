import KenSchema from "./KenSchema";
import { KenCreate, UpdateKen } from "./types";
import { Ken } from "././KenSchema";

export class KenService {
  // THESE METHODS ARE FOR MUTATIONS

  async create(args: KenCreate): Promise<Ken> {
    const newKen = new KenSchema(args);
    return newKen.save();
  }

  async updateKen(args: UpdateKen): Promise<Ken | Error> {
    const ken = await KenSchema.findById(args.id);

    if (ken === null) return new Error("No Profile Found");

    const result = await KenSchema.findByIdAndUpdate(args.id, args, { new: true, useFindAndModify: false });
    return result
  }



  // THESE METHODS ARE FOR QUERIES

  async findById(id: string): Promise<Ken> {
    return KenSchema.findById(id);
  }

  async findAll(): Promise<Ken[]> {
    const allProfile = await KenSchema.find();
    return allProfile;
  }

}
