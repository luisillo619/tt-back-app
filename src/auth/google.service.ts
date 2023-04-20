import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
// import { TouristRepository } from 'src/tourist/tourist.repository';
import { TouristRegistrationDto } from 'src/tourist/dto/tourist-registration.dto';
import { AgencyRegistrationDTO } from 'src/agency/dto/agency-register.dto';
import { TouristService } from 'src/tourist/tourist.service';
import { AgencyService } from '../agency/agency.service';

@Injectable()
export class GoogleAuthService {
  constructor(
    private readonly turistService: TouristService,
    private readonly agencyService: AgencyService,
  ) {}

  async createTouristFromGoogle(googleUser: any): Promise<TouristRegistrationDto> {
    const tourist = await this.turistService.create({
      firstName: googleUser.given_name,
      lastName: googleUser.family_name,
      email: googleUser.email,
      googleId: googleUser.sub,
      password: googleUser.email,
      phoneNumber: '000000',
    });
    return tourist;
  }

  async createAgencyFromGoogle(googleUser: any): Promise<AgencyRegistrationDTO> {
    const agency = await this.agencyService.createAgency({
      name: googleUser.given_name,
      email: googleUser.email,
      cnpj: '000000000',
      responsable: googleUser.given_name,
      password: googleUser.email,
    });
    return agency;
  }

  async validateGoogleUser(
    googleUser: any,
    userType,
  ): Promise<AgencyRegistrationDTO | TouristRegistrationDto> {
    if (userType === 'TOURIST') {
      // tourist servide
      return this.turistService.getTouristByGoogleId(googleUser.sub);
    }
    if (userType === 'AGENCY') {
      return this.agencyService.getAgencyByGoogleId(googleUser.sub);
    }
    throw new HttpException('Invalid User Type', HttpStatus.BAD_REQUEST);
  }
}
