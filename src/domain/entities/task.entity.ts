import { Entity, PrimaryKey, Property } from '@mikro-orm/core'
import { type TaskCreateDTO } from './task.dto'
import { v4 as uuidv4 } from 'uuid'

@Entity()
export class Task {
  constructor(readonly createTaskDTO: TaskCreateDTO) {
    const { description, completed } = createTaskDTO
    this.description = description
    this.completed = completed
    this.completedAt = completed ? new Date() : null
  }

  @PrimaryKey({ type: 'uuid' })
  id = uuidv4()

  @Property()
  description: string

  @Property()
  completed: boolean

  @Property({ nullable: true, type: Date })
  completedAt?: Date | null

  @Property({ onCreate: () => new Date() })
  createdAt: Date

  @Property({ onUpdate: () => new Date(), nullable: true })
  updatedAt?: Date
}
