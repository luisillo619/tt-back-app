import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AgencyRegistrationDto } from '../users/agency/dto/agency.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login/agency')
  async login(@Body() agencyRegistrationDto: AgencyRegistrationDto) {
    const agency = await this.authService.validateAgency(
      agencyRegistrationDto.email,
      agencyRegistrationDto.password
    );

    return this.authService.loginAgency(agency);
  }
}
