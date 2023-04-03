import { Module } from '@nestjs/common';
import { TouristController } from './tourist.controller';
import { TouristService } from './tourist.service';
import { TouristRepository } from './tourist.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Tourist, TouristSchema } from './schema/tourist.schema';


@Module({
    imports: [
        MongooseModule.forFeature([
            { 
                name: Tourist.name, 
                schema: TouristSchema 
            }
        ]),
    ],
    controllers: [TouristController],
    providers: [TouristService, TouristRepository], // Registra TouristService como proveedor
})

export class TouristModule {}