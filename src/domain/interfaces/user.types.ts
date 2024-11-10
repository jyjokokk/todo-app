import { type User } from '../entities/user.entity'

export type UserCreate = Omit<User, 'id' | 'createdAt' | 'updatedAt'>
