import JhondiSchema from './jhondiSchema';
import { createJhondi, getJhondi, updateJhondi } from './types';
import { IJhondi } from './Document';

export class JhondiService {
  // THESE METHODS ARE FOR MUTATIONS

  async create(args: createJhondi): Promise<IJhondi> {
    const newJc = new JhondiSchema(args);

    return newJc.save();
  }

  // THESE METHODS ARE FOR QUERIES

  async findById(id: string): Promise<IJhondi> {
    return JhondiSchema.findById(id);
  }

  //   updateJhondi
  async update(data: updateJhondi): Promise<IJhondi> {
    try {
      const { id, where } = data;
      const updateJhondi = await JhondiSchema.findByIdAndUpdate(
        id,
        { set: where },
        {
          new: true,
        }
      );
      return updateJhondi;
    } catch (error) {
      throw new Error(error);
    }
  }
}
