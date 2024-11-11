import 'reflect-metadata'
import mikroOrmConfig from './infrastructure/database/mikro-orm.config'
import { MikroORM } from '@mikro-orm/core'
import { Task } from './domain/entities/task.entity'

async function main() {
  const orm = await MikroORM.init(mikroOrmConfig)
  // const taskRepository = orm.em.getRepository(Task)
  const newTask = new Task({ description: 'Sample task', completed: false })
  // console.log(await taskRepository.findAll())
  console.log(newTask)

  // const generator = orm.getSchemaGenerator()
  // await generator.dropSchema()
  // await generator.createSchema()
  await orm.close()
}

main().catch((err: unknown) => {
  console.error(err)
  process.exit(1)
})
