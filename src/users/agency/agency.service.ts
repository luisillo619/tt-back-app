/* eslint-disable prettier/prettier */
import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Agency, AgencyDocument } from './schema/agency.schema';
import { AgencyRegistrationDto } from './dto/agency-registration.dto';
import { hash } from 'bcrypt';
import { isEmail, isStrongPassword } from './utils/agency.utils';

@Injectable()
export class AgencyService {
  constructor(
    @InjectModel(Agency.name)
    private readonly agencyModel: Model<AgencyDocument>,
  ) {}

  async create(registrationDto: AgencyRegistrationDto): Promise<Agency> {
    const { name, email, password, phoneNumber } = registrationDto;
    if (!name || !email || !password || !phoneNumber) {
      throw new BadRequestException('Missing data');
    }
    if (!isEmail(email)) {
      throw new BadRequestException('email is not valid');
    }
    if (!isStrongPassword(password)) {
      throw new BadRequestException('password most to be 8 characters');
    }
    const existingAgency = await this.agencyModel.findOne({ email }).exec();
    if (existingAgency) {
      throw new ConflictException('Email is already exist');
    }
    const hashedPassword = await hash(password, 10);
    const createdAgency = new this.agencyModel({
      ...Agency,
      password: hashedPassword,
    });
    return createdAgency.save();
  }
}
