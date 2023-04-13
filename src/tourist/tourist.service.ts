import { Injectable, BadRequestException } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
// import { Model } from 'mongoose';
import { Tourist } from './schema/tourist.schema';
import { TouristRegistrationDto } from './dto/tourist-registration.dto';
// import { TouristUpdateDto } from './dto/tourist-update.dto';
import { TouristRepository } from './tourist.repository';

@Injectable()
export class TouristService {
  constructor(private readonly _touristRepository: TouristRepository) {}

  async findById(id: string): Promise<Tourist> {
    const tourist = await this._touristRepository.findById(id);
    return tourist;
  }

  async findAll(): Promise<Tourist[]> {
    return this._touristRepository.findAll();
  }

  async create(touristRegistrationDto: TouristRegistrationDto): Promise<Tourist> {
    const { name, lastName, email, password, identityNumber, phoneNumber } = touristRegistrationDto;

    const touristWithEmail = await this._touristRepository.findByEmail(email);
    console.log(touristWithEmail);
    if (touristWithEmail) {
      throw new BadRequestException('Email already registered');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const createdTourist = this._touristRepository.create({
      name,
      lastName,
      email,
      password: hashedPassword,
      identityNumber,
      phoneNumber
    });

    return createdTourist;
  } // POST a http://localhost:3001/tourist/register con: { "name": "Carlos", "lastName": "Reyes", "email": "carlos@gmail.com", "password": "Carlos..14", "identityNumber": "ABC123456789", "phoneNumber": "3002003344" }

  // async update(id: string, updateDto: TouristUpdateDto): Promise<Tourist> {
  //     const { firstName, lastName, email, phoneNumber } = updateDto;
  //     console.log({ firstName, lastName, email, phoneNumber })
  //     if (!firstName || !lastName || !email || !phoneNumber) {
  //         throw new BadRequestException('Missing data');
  //     }

  //     const existingTourist = await this._touristRepository.findById(id);
  //     if (!existingTourist) {
  //         throw new NotFoundException('Tourist not found');
  //     }

  //     existingTourist.firstName = firstName;
  //     existingTourist.lastName = lastName;
  //     existingTourist.email = email;

  //     return existingTourist.save();
  // }

  // async delete(id: string): Promise<Tourist> {
  //     const tourist = await this._touristRepository.findById(id);
  //     if (!tourist) {
  //         throw new NotFoundException('Tourist not found');
  //     }
  //     return await tourist.deleteOne();
  // }
}
