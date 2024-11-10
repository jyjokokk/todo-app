import { IsString, IsNotEmpty, IsBoolean } from 'class-validator'

export class TaskCreateDTO {
  @IsString()
  @IsNotEmpty()
  description: string

  @IsBoolean()
  completed: boolean
}
