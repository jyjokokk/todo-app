import {
  IsString,
  IsNotEmpty,
  IsEmail,
  IsEnum,
  IsOptional
} from 'class-validator'
import { UserRole } from '../../constants/user-roles.enum'

export class UserCreateDTO {
  @IsString()
  @IsNotEmpty()
  name: string

  @IsEmail()
  @IsNotEmpty()
  email: string

  @IsString()
  @IsNotEmpty()
  password: string

  @IsOptional()
  @IsEnum(['user', 'admin'])
  role: UserRole
}
