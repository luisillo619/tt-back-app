import { Body, Controller, Post } from '@nestjs/common';
import { AgencyService } from './agency.service';
import { AgencyRegistrationDTO } from './dto/agency.dto';

@Controller('agency')
export class AgencyController {
  constructor(private readonly _agencyService: AgencyService) {}

  @Post('/register')
  async registerAgency(@Body() agencyRegistrationDto: AgencyRegistrationDTO) {
    return this._agencyService.create(agencyRegistrationDto);
  }
}
