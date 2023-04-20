import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Responsible, ResponsibleDocument } from 'src/responsible/schema/resposible.schema';
import { responsibleDetails } from './utils/types';
import { ResponsibleRepository } from './responsible.repository';

@Injectable()
export class ResponsibleService {
  constructor(private readonly _responsibleRepository: ResponsibleRepository) {}

  async validateUser(details: responsibleDetails): Promise<Responsible> {
    return this._responsibleRepository.validateUser(details);
  }

  async findById(id: string): Promise<Responsible> {
    const responsible = await this._responsibleRepository.findById(id);
    return responsible;
  }
}
