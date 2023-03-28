import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
// import { CreateAgencyUserDto } from './dto/create-agency-user.dto';
// import { UpdateAgencyUserDto } from './dto/create-item.dto';
// import { AgencyUserInterface } from './interface/agency-user';
import { AgencyUser, AgencyUserDocument } from './schema/agency-user.schema';
import { Model } from 'mongoose';
import { AgencyRegistrationDTO } from 'src/users/agency/dto/agency-registration.dto';
import { AgencyService } from '../users/agency/agency.service';

@Injectable()
export class AgencyUserService {
  constructor(
    @InjectModel(AgencyUser.name)
    private agencyUserModel: Model<AgencyUserDocument>,
    private readonly agencyUserService: AgencyUserService,
  ) {}

  async getAgencyUsers() {
    return await this.agencyUserModel.find();
  }

  async getAgencyUser(id: number) {
    return await this.agencyUserModel.findById(id);
  }
}
