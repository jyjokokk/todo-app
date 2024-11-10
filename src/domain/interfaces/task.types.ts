import { type Task } from '../entities/task.entity'
export type TaskCreate = Omit<Task, 'id' | 'createdAt' | 'updatedAt'>
