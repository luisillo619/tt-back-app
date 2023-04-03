import { Controller } from '@nestjs/common';
import { Get, Req, UseGuards } from '@nestjs/common/decorators';
import { GoogleAuthGuard } from 'src/auth-google/utils/Guards';

@Controller('responsible')
export class ResponsibleController {
  @Get('auth/google')
  @UseGuards(GoogleAuthGuard) 
  handleAuthGoogle() {
    return { msg: 'Google Auth' };
  }

  @Get('status')
  userStatus(@Req() request: Request & { user: any }) {
    console.log('estoy en el controlador', request.user);
    if (request.user) {
      return { msg: 'Authenticated' };
    } else {
      return { msg: 'Not Authenticated' };
    }
  }
}
