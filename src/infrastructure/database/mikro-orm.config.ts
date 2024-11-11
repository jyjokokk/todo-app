import { MikroORM } from '@mikro-orm/better-sqlite'
import { BetterSqliteDriver } from '@mikro-orm/better-sqlite'
import { Task } from '../../domain/entities/task.entity'

// TOOD: move to proper config dir, and load with config service
export default {
  entities: [Task],
  dbName: 'localdb.sqlite3',
  debug: process.env.IS_PRODUCTION === 'false',
  driver: BetterSqliteDriver,
  allowGlobalContext: true
} as Parameters<typeof MikroORM.init>[0]
