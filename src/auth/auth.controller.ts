import { Controller, Body, Post, Query } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginAuthDto } from './dto/login-touris-auth.dto';

// http://localhost:3001/login
@Controller('login')
export class AuthControllerTourist {
  constructor(private readonly authService: AuthService) {}

  @Post('/')
  async loginTourist(@Body() touristObjectLogin: LoginAuthDto, @Query('type') userType) {
    const data = await this.authService.login(touristObjectLogin, userType);
    return data;
  }

  // @Post('/agency')
  // async loginAgency(@Body() agencyObjectLogin: LoginAuthDto) {
  //   const data = await this.authService.login(agencyObjectLogin, 'agency');
  //   return data;
  // }

  // //Login Tourist
  // @Post('tourist')
  // loginUserTourist(@Body() touristObjectLogin: LoginAuthDto) {
  //     return this.authService.tourist(touristObjectLogin);
  // }

  // //Login Agency
  // @Post('agency')
  // loginUserAgency(@Body() agencyObjectLogin: LoginAuthDto) {
  //     return this.authService.agency(agencyObjectLogin);
  // }
}
