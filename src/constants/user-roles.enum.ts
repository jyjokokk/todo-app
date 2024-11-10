import { ObjectValues } from '../types/object-values.type'

export const USER_ROLES = {
  ADMIN: 'admin',
  USER: 'user'
} as const

export type UserRole = ObjectValues<typeof USER_ROLES>
