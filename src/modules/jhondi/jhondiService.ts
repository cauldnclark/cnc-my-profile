import JhondiSchema from './JhondiSchema';
import { createJhondi, getJhondi, updateJhondi } from './types';
import { IJhondi } from './Document';

export class JhondiService {
  // THESE METHODS ARE FOR MUTATIONS

  async create(args: createJhondi): Promise<IJhondi> {
    const newJhondi = new JhondiSchema(args);
    return newJhondi.save();
  }

  // THESE METHODS ARE FOR QUERIES

  async findById(id: string): Promise<IJhondi> {
    return await JhondiSchema.findById(id);
  }

  /*
   * @params: id of String and data
   * @return: new udpatedDocument
   */
  async update(data: updateJhondi): Promise<IJhondi> {
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
