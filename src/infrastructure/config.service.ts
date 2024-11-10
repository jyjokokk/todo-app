import * as dotenv from 'dotenv'
import { ConfigServiceDependencies, type EnvParseOutput } from './config.types'

export class ConfigService {
  readonly envs: EnvParseOutput
  private readonly dotenv: typeof dotenv

  constructor(dependencies: ConfigServiceDependencies) {
    const { dotenv } = dependencies
    this.dotenv = dotenv
    this.envs = this.loadEnvironmentVars()
  }

  private loadEnvironmentVars() {
    const envs = this.dotenv.config()
    if (envs.error || !envs.parsed) {
      throw new Error('Failed to load environment variables', envs.error)
    }
    return envs.parsed
  }

  getEnvs(): EnvParseOutput {
    return this.envs
  }
}

const dependencies = {
  dotenv
}
export default new ConfigService(dependencies)
