import { IsNotEmpty, IsOptional, MaxLength, MinLength } from 'class-validator';

export class CreateTripDTO {
  @IsNotEmpty()
  @MinLength(4)
  @MaxLength(15)
  name: string;

  @IsNotEmpty()
  country: string;

  @IsNotEmpty()
  province: string;

  @IsNotEmpty()
  departure: Date;

  @IsNotEmpty()
  arrival: Date;

  @IsOptional()
  price?: string;

  @IsOptional()
  distance: string;

  @IsOptional()
  suggestion: string;
}
