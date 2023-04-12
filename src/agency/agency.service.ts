import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { Agency, AgencyDocument } from './schema/agency.schema';
import { AgencyRegistrationDTO } from './dto/agency-register.dto';

@Injectable()
export class AgencyService {
  constructor(@InjectModel(Agency.name) private readonly AgencytModel: Model<AgencyDocument>) {}

  async createAgency(agencyRegistrationDTO: AgencyRegistrationDTO): Promise<Agency> {
    const { name, email, password } = agencyRegistrationDTO;

    const agencyWithEmail = await this.AgencytModel.findOne({ email }).exec();
    if (agencyWithEmail) {
      throw new BadRequestException('Email already registered');
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const createdAgency = new this.AgencytModel({
      name,
      email,
      password: hashedPassword,
    });
    return createdAgency.save();
  } // POST a http://localhost:3000/agency/register con: { "name": "Agencia X", "email": "agenciaX@gmail.com", "password": "Carlos..14", "phoneNumber": "3002003344" }

  async getAgencyByGoogleId(googleId: string): Promise<Agency> {
    return this.AgencytModel.findOne({ googleId }).exec();
  }
}
