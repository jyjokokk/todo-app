import { UserCreateDTO } from './user.dto'

export class User {
  constructor(readonly createUserDTO: UserCreateDTO) {
    const { name, email, password, role } = createUserDTO
    this.name = name
    this.email = email
    this.password = password
    this.role = role
  }

  id: number

  name: string

  email: string

  password: string

  role?: string

  createdAt: Date

  updatedAt: Date
}
