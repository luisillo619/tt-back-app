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

  //Metodo para buscar Agency por alguna propiedad string
  async findOne(email: string): Promise<Agency> {
    return this.agencyModel.findOne({ email }).exec();
  }

  //Metodo create Agency
  async create(registrationDto: AgencyRegistrationDto): Promise<Agency> {
    const { name, email, password, phoneNumber } = registrationDto;
    if (!name || !email || !password || !phoneNumber) {
      throw new BadRequestException('Missing data');
    }
    if (!isEmail(email)) {
      throw new BadRequestException('email is not valid');
    }
    const existingAgency = await this.agencyModel.findOne({ email }).exec();
    if (existingAgency) {
      throw new ConflictException('Email is already exist');
    }
    const hashedPassword = await hash(password, 10);
    const createdAgency = new this.agencyModel({
      ...registrationDto,
      password: hashedPassword,
    });
    return createdAgency.save();
  }
}
