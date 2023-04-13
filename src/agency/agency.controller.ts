import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    NotFoundException,
    InternalServerErrorException
  } from '@nestjs/common';
  import { AgencyService } from './agency.service';
  import { AgencyRegistrationDTO } from './dto/agency.update.dto';
  import { Agency } from './schema/agency.schema';
  
  @Controller('agency')
  export class AgencyController {
    constructor(private readonly agencyService: AgencyService) {}
  
    @Get()
    async findAll(): Promise<Agency[]> {
      try {
        return await this.agencyService.findAll();
      } catch (error) {
        throw new InternalServerErrorException('Failed to fetch all agencies');
      }
    }
  
    @Get(':id')
    async findById(@Param('id') id: string) {
      try {
        const agency = await this.agencyService.findById(id);
        if (!agency) {
          throw new NotFoundException(`Agency with ID ${id} not found`);
        }
        return agency;
      } catch (err) {
        throw new NotFoundException(`Agency with ID ${id} not found`);
      }
    }
  
    @Post('/register')
    async create(@Body() agencyRegistrationDTO: AgencyRegistrationDTO) {
      try {
        const result = await this.agencyService.create(agencyRegistrationDTO);
        return result;
      } catch (error) {
        throw new NotFoundException(`The tourist could not be created`);
      }
    } // POST a http://localhost:3001/agency/register con: { "name": "Agencia ABC", "email": "agenciaABC@gmail.com", "password": "AgencyABC..14", "phoneNumber": "3002003344" }
  }
  