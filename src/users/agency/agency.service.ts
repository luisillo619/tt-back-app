import { hash } from 'bcrypt';
import { Model } from 'mongoose';

import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Agency, AgencyDocument } from './schema/agency.schema';
import { AgencyRegistrationDto } from './dto/agency-registration.dto';
import { isEmail } from './utils/agency.utils';

@Injectable()
export class AgencyService {
  constructor(
    @InjectModel(Agency.name)
    private readonly _agencyModel: Model<AgencyDocument>,
  ) {}

  async findOne(email: string): Promise<Agency> {
    return this._agencyModel.findOne({ email }).exec();
  }

  async create(registrationDto: AgencyRegistrationDto): Promise<Agency> {
    const { name, email, password, phoneNumber } = registrationDto;

    if (!name || !email || !password || !phoneNumber) {
      throw new BadRequestException('Missing data');
    }

    if (!isEmail(email)) {
      throw new BadRequestException('email is not valid');
    }

    const existingAgency = await this._agencyModel.findOne({ email }).exec();
    if (existingAgency) {
      throw new ConflictException('Email is already exist');
    }

    const hashedPassword = await hash(password, 10);
    const createdAgency = new this._agencyModel({
      ...registrationDto,
      password: hashedPassword,
    });

    return createdAgency.save();
  }
}
