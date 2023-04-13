import { Injectable, BadRequestException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { Agency } from './schema/agency.schema';
import { AgencyRegistrationDTO } from './dto/agency.update.dto';
import { AgencyRepository } from './agency.repository';

@Injectable()
export class AgencyService {
  constructor(private readonly _agencyRepository: AgencyRepository) {}

  async findById(id: string): Promise<Agency> {
    const tourist = await this._agencyRepository.findById(id);
    return tourist;
  }

  async findAll(): Promise<Agency[]> {
    return this._agencyRepository.findAll();
  }

  async create(agencyRegistrationDTO: AgencyRegistrationDTO): Promise<Agency> {
    const { name, email, phoneNumber, password } = agencyRegistrationDTO;
    console.log({ name, email, phoneNumber, password });
    const agencyWithEmail = await this._agencyRepository.findByEmail(email);
    if (agencyWithEmail) {
      throw new BadRequestException('Email already registered');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const agencyTourist = this._agencyRepository.create({
      name,
      email,
      phoneNumber,
      password: hashedPassword
    });

    return agencyTourist;
  } // POST a http://localhost:3000/agency/register con: { "name": "Agencia X", "email": "agenciaX@gmail.com", "password": "Carlos..14", "phoneNumber": "3002003344" }
}
