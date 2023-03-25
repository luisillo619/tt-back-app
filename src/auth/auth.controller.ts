/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AgencyRegistrationDto } from '../users/agency/dto/agency-registration.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register/agency')
  async registerAgency(@Body() agencyRegistrationDto: AgencyRegistrationDto) {
    return this.authService.registerAgency(agencyRegistrationDto);
  }

  @Post('login/agency')
  async login(@Body() agencyRegistrationDto: AgencyRegistrationDto) {
    console.log(agencyRegistrationDto);
    const agency = await this.authService.validateAgency(
      agencyRegistrationDto.email,
      agencyRegistrationDto.password,
    );
    console.log(agency);
    return this.authService.loginAgency(agency);
  }
}
