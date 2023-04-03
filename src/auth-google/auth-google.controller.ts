import { Controller, Get, NotFoundException, UseGuards } from '@nestjs/common';
import { Body, Redirect, Req, Res } from '@nestjs/common/decorators';
import { GoogleAuthGuard } from './utils/Guards';
import { Response } from 'express';

@Controller('api/auth/google')
export class AuthGoogleController {
 
  @Get('/')
  handleLogin(@Body() body: any, @Res() res: Response) {
    const userRole = body.role;
    // if (userRole === 'responsible') {
      return res.redirect(`${process.env.API_URL}/responsible/auth/google`);
    // } else if (userRole === 'seller') {
      return res.redirect(`${process.env.API_URL}/seller/auth/google`);
    // } else {
      throw new NotFoundException('Resource not found');
    // }
  }

  @Get('redirect')
  @UseGuards(GoogleAuthGuard)
  @Redirect('status')
  handleRedirect() {}

  @Get('status')
  user(@Req() request: Request & { user: any }) {
    if (request.user) {
      return { msg: request.user };
    } else {
      return { msg: 'Not Authenticated' };
    }
  }
}
