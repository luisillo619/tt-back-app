import { Body, Controller, Post, NotFoundException } from '@nestjs/common';
import { AgencyService } from './agency.service';
import { AgencyRegistrationDTO } from './dto/agency.dto';
import { Agency } from './schema/agency.schema';
import mongoose from 'mongoose';

@Controller('agency')
export class AgencyController {
  constructor(private readonly agencyService: AgencyService) {}

  @Post('/register')
  async create(@Body() agencyRegistrationDto: AgencyRegistrationDTO) {
      try {
          const result = await this.agencyService.create(agencyRegistrationDto);
          return result;
      } catch (error) {
          throw new NotFoundException(`The tourist could not be created`);
      }
  }

}
