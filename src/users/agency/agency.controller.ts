import { Body, Controller, Post } from '@nestjs/common';
import { AgencyService } from './agency.service';
import { AgencyRegistrationDto } from './dto/agency.dto';

@Controller('agency')
export class AgencyController {
  constructor(private readonly _agencyService: AgencyService) {}

  @Post('/register')
  async registerAgency(@Body() agencyRegistrationDto: AgencyRegistrationDto) {
    return this._agencyService.create(agencyRegistrationDto);
  }
}
