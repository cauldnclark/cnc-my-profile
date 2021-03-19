import JhondiSchema from './jhondiSchema';
import { createJhondi, responseJhondi, updateJhondi } from './types';
import { IJhondi } from './Document';
import dateToString from './utils/date';

export class JhondiService {
  // THESE METHODS ARE FOR MUTATIONS

  async create(args: createJhondi): Promise<IJhondi> {
    const newJhondi = new JhondiSchema(args);
    return newJhondi.save();
  }

  // THESE METHODS ARE FOR QUERIES

  async findById(id: string): Promise<responseJhondi> {
    try {
      const findID: any = await JhondiSchema.findById(id);
      const { _id, age, name, email, createdAt, updatedAt } = findID;
      return {
        _id,
        age,
        name,
        email,
        createdAt: dateToString(createdAt),
        updatedAt: dateToString(updatedAt),
      };
    } catch (error) {
      throw new Error(error);
    }
  }

  /*
   * @params: id of String and data
   * @return: new udpatedDocument
   */
  async update(data: any): Promise<IJhondi> {
    const { id, where } = data;
    return await JhondiSchema.findByIdAndUpdate(id, where, {
      new: true,
    });
  }

  /*
   * @return array of documents
   */
  async findAll(): Promise<IJhondi[]> {
    return await JhondiSchema.find({});
  }
}
