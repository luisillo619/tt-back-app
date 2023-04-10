import { Injectable } from '@nestjs/common';
import { Responsible } from './schema/resposible.schema';
import { ResponsibleRepository } from './responsible.repository';

@Injectable()
export class ResponsibleService {
  constructor(private readonly _responsibleRepository: ResponsibleRepository) {}

  async findAll(): Promise<Responsible[]> {
    const users = await this._responsibleRepository.findAll();
    return users;
  }

  async update(body: any, id: string): Promise<Responsible>{
    const user = await this._responsibleRepository.update(body, id);
    return user;
  }
}
