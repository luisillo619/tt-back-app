import { Controller, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { Get, UseGuards, Body, Param, Post, Req, Res } from '@nestjs/common/decorators';

import { TouristService } from './tourist.service';
import { TouristRegistrationDto } from './dto/tourist-registration.dto';
import { Tourist } from './schema/tourist.schema';
import { GoogleTouristGuard } from './utils/guardian.tourist.google.auth';

@Controller('tourist')
export class TouristController {
  constructor(private readonly touristService: TouristService) {}

 // AUTH GOOGLE
 @Get("google")
 @UseGuards(GoogleTouristGuard)
 async googleAuth(@Req() req) {}

 @Get('redirect')
 @UseGuards(GoogleTouristGuard)
 redirect(@Req() request, @Res() response: any) {
   const userAgent = request.headers['user-agent'];

   if (/mobile/i.test(userAgent)) {
     if (request.user) {
       return response.redirect(`${process.env.DEEP_LINK_CLIENT}myapp/home`);
     }
     return 'Not Authenticated';
   }
   return response.redirect(`${process.env.API_URL}/api/auth/google/status`);
 }


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
