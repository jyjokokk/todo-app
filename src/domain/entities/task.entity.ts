import { Entity, PrimaryKey, Property } from '@mikro-orm/core'
import { type TaskCreateDTO } from './task.dto'

@Entity()
export class Task {
  constructor(readonly createTaskDTO: TaskCreateDTO) {
    const { description, completed } = createTaskDTO
    this.description = description
    this.completed = completed
    this.completedAt = completed ? new Date() : null
  }

  @PrimaryKey()
  id!: number

  @Property()
  description: string

  @Property()
  completed: boolean

  @Property({ nullable: true })
  completedAt?: Date | null

  @Property({ onCreate: () => new Date() })
  createdAt: Date

  @Property({ onUpdate: () => new Date() })
  updatedAt: Date
}
