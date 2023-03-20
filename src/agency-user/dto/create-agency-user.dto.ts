import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateAgencyUserDto {
  @IsNotEmpty()
  @IsNumber()
  agencyUserId: number;

  @IsNotEmpty()
  @IsString()
  agencyUserName: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  transportIds: string;

  @IsNotEmpty()
  @IsNumber()
  roleId: number;

  @IsNotEmpty()
  @IsNumber()
  phoneNumber: number;

  @IsNotEmpty()
  @IsBoolean()
  isActive: boolean;
}
