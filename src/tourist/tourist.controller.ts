import { Controller, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { Get, UseGuards, Body, Param, Post, Req } from '@nestjs/common/decorators';
import { GoogleAuthGuard } from 'src/auth-google/utils/Guards';
import { TouristService } from './tourist.service';
import { TouristRegistrationDto } from './dto/tourist-registration.dto';
import { Tourist } from './schema/tourist.schema';

@Controller('tourist')
export class TouristController {
  constructor(private readonly touristService: TouristService) {}

  @Get()
  async findAll(): Promise<Tourist[]> {
    try {
      return await this.touristService.findAll();
    } catch (error) {
      throw new InternalServerErrorException('Failed to fetch all users');
    }
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Tourist> {
    try {
      const tourist = await this.touristService.findById(id);
      if (!tourist) {
        throw new NotFoundException(`Tourist with ID ${id} not found`);
      }
      return tourist;
    } catch (err) {
      throw new NotFoundException(`Tourist with ID ${id} not found`);
    }
  }

  @Post('/register')
  async create(@Body() touristRegistrationDto: TouristRegistrationDto): Promise<Tourist> {
    try {
      return await this.touristService.create(touristRegistrationDto);
    } catch (error) {
      throw new NotFoundException(`The tourist could not be created`);
    }
  }

  // AUTH GOOGLE
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

// @Put(':id')
// async update(@Param('id') id: string, @Body() updateDto: TouristUpdateDto): Promise<Tourist> {
//   try {
//     return await this.touristService.update(id, updateDto);
//   } catch (error) {
//     if (error instanceof mongoose.Error.CastError || error instanceof mongoose.Error.ValidationError) {
//       throw new BadRequestException('Invalid request body');
//     } else {
//       throw error;
//     }
//   }
// }

// @Delete(':id')
// async delete(@Param('id') id: string): Promise<Tourist> {
//   try {
//     return await this.touristService.delete(id);
//   } catch (error) {
//     throw new InternalServerErrorException('Failed to delete tourist');
//   }
// }
