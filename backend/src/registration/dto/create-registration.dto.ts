import { IsEmail, IsString, MinLength } from 'class-validator';

export class CreateRegistrationDto {
  @IsEmail()
  email: string;

  @IsString()
  picked: string;

  @IsString()
  name: string;

  @IsString()
  @MinLength(9)
  cpf: string;

  @IsString()
  dob: string;

  @IsString()
  rs: string;

  @IsString()
  @MinLength(11)
  cnpj: string;

  @IsString()
  dobi: string;

  @IsString()
  tel: string;

  @IsString()
  password: string;
}
