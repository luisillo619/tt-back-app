import { Controller } from '@nestjs/common';
import { Get, Put, Req, UseGuards, Body, Param } from '@nestjs/common/decorators';
import { GoogleAuthGuard } from 'src/auth-google/utils/Guards';
import { NotFoundException } from '@nestjs/common/exceptions';
import { ResponsibleService } from './responsible.service';

@Controller('responsible')
export class ResponsibleController {
  constructor(private readonly responsibleService: ResponsibleService) {}

  // SERVICE
  @Get('findAll')
  async findAll() {
    try {
      const users = await this.responsibleService.findAll();
      if (!users) {
        throw new NotFoundException(`Users dont exists`);
      }
      return users;
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  @Put('update/:id')
  async update(@Body() body: any, @Param('id') id: string) {
    try {
      const user = await this.responsibleService.update(body, id);
      return user;
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  // AUTH SERVICE
  @Get('auth/google')
  @UseGuards(GoogleAuthGuard) // se encarga de mostrar la pagina para el login de google
  handleAuthGoogle() {
    return 'Google Auth';
  }

  @Get('status')
  userStatus(@Req() request: Request & { user: any }) {
    if (request.user) return request.user;
    return 'Not Authenticated';
  }
}
