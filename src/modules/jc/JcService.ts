import JcSchema from "./JcSchema";
import { JcCreate } from "./types";
import { Jc } from "./JcSchema";

export class JcService {
  async create(args: JcCreate): Promise<Jc> {
    const newJc = new JcSchema(args);

    return newJc.save();
  }
}
