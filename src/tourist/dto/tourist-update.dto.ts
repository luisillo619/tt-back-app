import { IsEmail, IsNotEmpty } from 'class-validator';

export class TouristUpdateDto {
 
  firstName: string;

  lastName: string;

  @IsEmail()
  email: string;
  
  phoneNumber: number;
}
