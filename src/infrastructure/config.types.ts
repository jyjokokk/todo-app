import * as dotenv from 'dotenv'

export type DotEnv = typeof dotenv

export type EnvParseOutput = Record<string, string>

export interface ConfigServiceDependencies {
  dotenv: DotEnv
}
