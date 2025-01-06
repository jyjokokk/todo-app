import 'reflect-metadata'
import mikroOrmConfig from './infrastructure/database/mikro-orm.config'
import { MikroORM } from '@mikro-orm/core'
import { Task } from './domain/entities/task.entity'
// import configService from './infrastructure/config/config.service'

async function main() {
  const orm = await MikroORM.init(mikroOrmConfig)
  // await orm.schema.refreshDatabase()

  const em = orm.em.fork()

  // const newTask = new Task({ description: 'Sample task', completed: false })
  // const secondTask = new Task({ description: 'Another task', completed: true })
  // await em.persist([newTask, secondTask]).flush()

  const taskRepository = em.getRepository(Task)
  const allTasks = await taskRepository.findAll()
  console.log(allTasks)

  await orm.close()
}

main().catch((err: unknown) => {
  console.error(err)
  process.exit(1)
})
