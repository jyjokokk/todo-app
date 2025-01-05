import { MikroORM } from '@mikro-orm/better-sqlite'
import { BetterSqliteDriver } from '@mikro-orm/better-sqlite'
import { Task } from '../../domain/entities/task.entity'
import configService from '../config/config.service' // make config global or pass it as depenendecy/arg

const dbName = configService.getConfig().DATABASE_URI
// TOOD: move to proper config dir, and load with config service
export default {
  entities: [Task],
  dbName,
  debug: process.env.IS_PRODUCTION === 'false',
  driver: BetterSqliteDriver,
  allowGlobalContext: true
} as Parameters<typeof MikroORM.init>[0]
