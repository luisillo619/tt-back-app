import { Body, Controller, Post } from '@nestjs/common';

import { AuthService } from './auth.service';
import { AgencyRegistrationDTO } from '../users/agency/dto/agency.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login/agency')
  async login(@Body() agencyRegistrationDTO: AgencyRegistrationDTO) {
    const { email, password } = agencyRegistrationDTO;

    const agency = await this.authService.validateAgency(email, password);

    return this.authService.loginAgency(agency);
  }
}
