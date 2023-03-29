import { Injectable } from '@nestjs/common';

import { AgencyRepository } from './repository/agency.repository';

@Injectable()
export class AgencyService {
  constructor(private readonly _agencyRepository: AgencyRepository) {}

  async create(obj: any) {
    return this._agencyRepository.create(obj);
  }
}
