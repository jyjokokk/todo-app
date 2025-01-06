import type config from '../../../config'

export type ConfigObject = (typeof config)['LOCAL']
export type EnvParseOutput = Record<string, string>
