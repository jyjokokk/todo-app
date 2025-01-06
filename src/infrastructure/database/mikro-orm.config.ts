/**
 * MikroORM configuration service for the database connection.
 *
 * This service should be able to connect both to a local SQLite database
 * and a PostgreSQL database, depending on the environment.
 *
 * @file /Users/jyrki/Code/PHP/todo-app/src/infrastructure/database/mikro-orm.config.ts
 * @module MikroORMConfig
 *
 * @see {@link https://mikro-orm.io/docs/configuration MikroORM Configuration Documentation}
 * @todo Make into a proper service, and evalute location in the project structure.
 */
import { MikroORM } from '@mikro-orm/better-sqlite'
import { BetterSqliteDriver } from '@mikro-orm/better-sqlite'
import { Task } from '../../domain/entities/task.entity'
import { DATABASE_URI } from '../../constants/paths.const'

const dbName = DATABASE_URI
export default {
  entities: [Task],
  dbName,
  debug: process.env.IS_PRODUCTION === 'false',
  driver: BetterSqliteDriver,
  allowGlobalContext: true
} as Parameters<typeof MikroORM.init>[0]
