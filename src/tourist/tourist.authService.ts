import { Injectable } from '@nestjs/common';
import { Tourist } from './schema/tourist.schema';
import { TouristRepository } from './tourist.repository';
// import Validate

@Injectable()
export class AuthTouristService {
  constructor(private readonly _touristRepository: TouristRepository) {}

  async validateUser(details: any): Promise<Tourist> {
    console.log('estoy en el servicio apuntando a: ', this._touristRepository);
    return this._touristRepository.validateUser(details);
  }

  async findById(id: string): Promise<Tourist> {
    const user = await this._touristRepository.findById(id);
    return user;
  }
}
