import { Controller, Get, Param } from '@nestjs/common';
import { AgencyUserService } from './agency-user.service';

@Controller()
export class AgencyUserController {
  constructor(private agencyUserService: AgencyUserService) {}

  @Get()
  getAgencyUsers() {
    return this.agencyUserService.getAgencyUsers();
  }

  @Get(':id')
  getAgencyUser(@Param('id') id: string) {
    return this.agencyUserService.getAgencyUser(id);
  }
}
