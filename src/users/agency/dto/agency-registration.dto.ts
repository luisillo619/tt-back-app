import { IsEmail, IsNotEmpty } from 'class-validator';

export class AgencyRegistrationDto {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  phoneNumber: number;
}
