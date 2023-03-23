/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AgencyRegistrationDto } from '../users/agency/dto/agency-registration.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() agencyRegistrationDto: AgencyRegistrationDto) {
    const agency = await this.authService.validateAgency(
      agencyRegistrationDto.email,
      agencyRegistrationDto.password,
    );
    return this.authService.login(agency);
  }
}
