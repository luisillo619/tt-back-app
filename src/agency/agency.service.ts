import { BadRequestException, ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Agency, AgencyDocument } from './schema/agency.schema';
import { AgencyRegistrationDTO } from './dto/agency.dto';
import * as bcrypt from 'bcrypt';


@Injectable()
export class AgencyService {  
  constructor(@InjectModel(Agency.name) private readonly touristModel: Model<AgencyDocument>) {}

  async create(agencyRegistrationDTO: AgencyRegistrationDTO): Promise<Agency> {
    const { name, email, phoneNumber, password } = agencyRegistrationDTO;

    const agencyWithEmail = await this.touristModel.findOne({ email }).exec();
    if (agencyWithEmail) {
        throw new BadRequestException('Email already registered');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const createdAgency = new this.touristModel({
        name,
        email,
        phoneNumber,
        password: hashedPassword,
    });

    return createdAgency.save();
  }//POST a http://localhost:3000/agency/register con: { "name": "Agencia X", "email": "agenciaX@gmail.com", "password": "Carlos..14", "phoneNumber": "3002003344" }
}
