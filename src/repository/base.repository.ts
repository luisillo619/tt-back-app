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

  // Busca por id
  async findById(id: string): Promise<T> {
    const user = await this.BaseModel.findById(id);
    return user;
  }

  // Busca todos
  async findAll(): Promise<T[]> {
    const user = await this.BaseModel.find().exec();
    return user;
  }

  // Busca por email
  async findByEmail(email: string): Promise<T> {
    const user = await this.BaseModel.findOne({ email }).exec();
    return user;
  }

  // Crea
  async create(object: any): Promise<T> {
    try {
      const created = await this.BaseModel.create(object);
      return created.save();
    } catch (error) {
      throw new HttpException(
        `Could not create ${this.modelName}`,
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  // Actualiza
  async update(body, id): Promise<T> {
    const user = await this.BaseModel.findByIdAndUpdate(id, body, {
      new: true
    });
    if (!user) {
      throw new HttpException('update error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
    return user;
  }

  async validateUser(details: any): Promise<T> {
    try {
      const { email, fullName, subject, provider, picture } = details;
      
      const user = await this.BaseModel.findOne({
        provider,
        subject,
        // si solo se quiere tener una cuenta quitar subject y agregar email
      });
      if (!user) {
        console.log('user not Found, creating...');
        const newUser = new this.BaseModel({
          email,
          picture,
          firstName: fullName.split(' ')[0],
          lastName: fullName.split(' ')[1],
          provider,
          subject,
          role: this.modelName.toString().toLowerCase(),
        });

        await newUser.save();
        return newUser;
      }
      return user;
    } catch (error) {
      throw new HttpException(
        `Could not validate ${this.modelName}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
