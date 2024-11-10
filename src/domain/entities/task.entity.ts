import { type TaskCreateDTO } from './task.dto'

export class Task {
  constructor(readonly createTaskDTO: TaskCreateDTO) {
    const { description, completed } = createTaskDTO
    this.description = description
    this.completed = completed
    this.completedAt = completed ? new Date() : null
  }

  id: number

  description: string

  completed: boolean

  completedAt?: Date | null

  createdAt: Date

  updatedAt: Date
}
