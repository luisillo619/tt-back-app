import { Controller, Get, Param } from '@nestjs/common';
// import { CreateAgencyUserDto } from './dto/create-agency-user.dto';
import { AgencyUserService } from './agency-user.service';
// import { AgencyUserInterface } from './interface/agency-user';

@Controller()
export class AgencyUserController {
  constructor(private agencyUserService: AgencyUserService) {}

  @Get()
  getAgencyUsers() {
    return this.agencyUserService.getAgencyUsers();
  }

  @Get(':id')
  getAgencyUser(@Param('id') id: string) {
    return this.agencyUserService.getAgencyUser(parseInt(id));
  }
}
