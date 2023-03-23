/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Agency } from 'src/users/agency/schema/agency.schema';
import { AgencyService } from '../users/agency/agency.service';
import { compare } from 'bcrypt';
@Injectable()
export class AuthService {
  constructor(
    private readonly agencyService: AgencyService,
    private readonly jwtService: JwtService,
  ) {}

  async validateAgency(email: string, password: string): Promise<Agency> {
    const agency = await this.agencyService.findOne(email);
    if (!agency) {
      throw new UnauthorizedException('Invalid Credentials');
    }

    const isPasswordValid = await compare(password, agency.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid Credentials');
    }

    return agency;
  }

  async login(agency: Agency) {
    const payload = { email: agency.email, sub: agency._id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
