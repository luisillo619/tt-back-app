import { Model } from 'mongoose';

import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class BaseRepository<T> {
  protected readonly BaseModel: Model<T>;

  protected readonly modelName: string;

  constructor(baseModel: Model<T>) {
    this.BaseModel = baseModel;
    this.modelName = this.BaseModel.modelName;
  }

  async create(object: T): Promise<T> {
    try {
      const created = await this.BaseModel.create(object);
      return created;
    } catch (error) {
      throw new HttpException(
        `Could not create ${this.modelName}`,
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }
}
