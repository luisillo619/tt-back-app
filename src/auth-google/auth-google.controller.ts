import { Controller, Get, UseGuards } from '@nestjs/common';
import { HttpCode, Req, Res, Query } from '@nestjs/common/decorators';
// import { Response } from 'express';
import { HttpException } from '@nestjs/common/exceptions';
import { HttpStatus } from '@nestjs/common/enums';
import { IsString, IsOptional } from 'class-validator';
import { GoogleAuthGuard } from './utils/Guards';

class ExampleQueryDto {
  @IsString()
  @IsOptional()
  readonly role?: string;
}

@Controller('api/auth/google')
export class AuthGoogleController {
  // UNICO END POINT PARA LA AUTENTICACION DE GOOGLE
  @Get('/')
  handleLogin(@Res() response: any, @Query() query: ExampleQueryDto) {
    // if (query.role === 'responsible') {
    //   console.log('responsible');

    //   return response.redirect(`${process.env.API_URL}/responsible/auth/google`);
    // }
    if (query.role === 'tourist') {
      console.log('tourist');
      response.redirect(`${process.env.API_URL}/tourist/auth/google`);
    } else {
      return { msg: 'role invalido' };
    }
  }

  // Se manda a llamar despues de que el ususario se autentica, ya sea exitoso o fallido
  @Get('redirect')
  @UseGuards(GoogleAuthGuard)
  redirect(@Req() request, @Res() response: any) {
    console.log('estoy en el controlador', request.user);
    const userAgent = request.headers['user-agent'];

    if (/mobile/i.test(userAgent)) {
      if (request.user) {
        return response.redirect(`${process.env.DEEP_LINK_CLIENT}myapp/home`);
      }
      return { msg: 'Not Authenticated' };
    }
    return response.redirect(`${process.env.API_URL}/api/auth/google/status`);
  }

  @Get('status')
  status(@Req() request: Request & { user: any }) {
    if (request.user) return 'Authenticated';
    return 'Not Authenticated';
  }

  @Get('logout')
  @HttpCode(200)
  async logout(@Req() request) {
    // Destruir la sesión del usuario
    try {
      await new Promise((resolve, reject) => {
        request.session.destroy((err) => {
          if (err) {
            console.log(err);
            reject(err);
          } else {
            resolve('Successful logout');
          }
        });
      });
      return 'Successful logout';
    } catch (err) {
      console.log(err);
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
  }
}
