import * as dotenv from 'dotenv'
import { ConfigServiceDependencies, type EnvParseOutput } from './config.types'
import config from '../../config'

export class ConfigService {
  readonly envs: EnvParseOutput
  private readonly dotenv: typeof dotenv

  constructor(dependencies: ConfigServiceDependencies) {
    const { dotenv } = dependencies
    this.dotenv = dotenv
    this.envs = this.loadEnvironmentVars()
  }

  private loadEnvironmentVars() {
    const parseResult = this.dotenv.config()
    if (parseResult.error || !parseResult.parsed) {
      throw new Error('Failed to load environment variables', parseResult.error)
    }
    return parseResult.parsed
  }

  getEnvs(): EnvParseOutput {
    return this.envs
  }

  getConfig() {
    return { ...this.envs, ...config }
  }
}

const dependencies = {
  dotenv
}
export default new ConfigService(dependencies)
