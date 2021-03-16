import JcSchema from "./JcSchema";
import { JcCreate } from "./types";
import { Jc } from "./JcSchema";

export class JcService {
  // THESE METHODS ARE FOR MUTATIONS

  async create(args: JcCreate): Promise<Jc> {
    const newJc = new JcSchema(args);

    return newJc.save();
  }

  // THESE METHODS ARE FOR QUERIES

  async findById(id: string): Promise<Jc> {
    return JcSchema.findById(id);
  }
}
