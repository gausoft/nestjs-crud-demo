import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class LoginDto {
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({ default: 'user@example.com' })
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @ApiProperty({ default: 'password' })
  password: string;
}
