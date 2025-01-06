import * as dotenv from 'dotenv'
import { ConfigObject, type EnvParseOutput } from './config.types'
import config from '../../../config'

// TODO: isProduction and isDevelopment functions (to separate file)

export class ConfigService {
  readonly envs: EnvParseOutput
  readonly configEnv: ConfigObject

  constructor() {
    this.envs = this.loadEnvironmentVars()
    this.configEnv = this.getConfig()
  }

  private loadEnvironmentVars() {
    const parseResult = dotenv.config()
    if (parseResult.error || !parseResult.parsed) {
      throw new Error('Failed to load environment variables', parseResult.error)
    }
    return parseResult.parsed
  }

  getEnvs(): EnvParseOutput {
    return this.envs
  }

  getConfig(): ConfigObject {
    if (this.envs.IS_LOCAL === 'true') {
      return config.LOCAL
    }
    if (this.envs.IS_DEVELOPMENT === 'true') {
      return config.DEVELOPMENT
    }
    if (this.envs.IS_PRODUCTION === 'true') {
      return config.PRODUCTION
    }
    throw new Error('No environment set in .env file')
  }

  get config() {
    return { ...this.envs, ...this.configEnv }
  }
}

export default new ConfigService()
