import * as dotenv from 'dotenv'
import { ConfigService } from './config.service'

const devEnv = {
  error: null,
  parsed: {
    PORT: '3000',
    IS_DEVELOPMENT: 'true',
    IS_PRODUCTION: 'false'
  }
}

const LOCAL = {
  DATABASE_URI: 'development.db',
  PORT: 4444
}
const DEVELOPMENT = {
  DATABASE_URI: 'development.db',
  PORT: 5555
}
const PRODUCTION = {
  DATABASE_URI: 'postgresql://user:secret@example.com:5432',
  PORT: 6666
}

const configFileContents = {
  DATABASE_URI: 'local.db',
  LOCAL,
  DEVELOPMENT,
  PRODUCTION
}

let instance: ConfigService

beforeEach(() => {
  jest.clearAllMocks()
  jest.resetModules()
  jest.mock('../../../config', () => {
    return configFileContents
  })
  jest.mock('dotenv', () => {
    return {
      dotenv: {
        config: jest.fn(() => {
          return { error: null, parsed: { devEnv } }
        })
      }
    }
  })

  instance = new ConfigService()
})

describe('ConfigService', () => {
  describe('getEnvs', () => {
    it('should return the environment variables', () => {
      const r = instance.getEnvs()
      expect(r).toMatchObject({ PORT: '3030' })
    })
    it('should call dotenv', () => {
      instance.getEnvs()
      expect(dotenv.config).toBeTruthy()
    })
  })
  describe('getConfig', () => {
    it('should return config file contents', () => {
      const r = instance.getConfig()
      expect(r).toHaveProperty('DATABASE_URI')
    })
  })

  describe('properties', () => {
    it("should have property 'config' via get method", () => {
      expect(instance.config).toHaveProperty('PORT')
      expect(instance.config).toHaveProperty('DATABASE_URI')
    })
  })
})
