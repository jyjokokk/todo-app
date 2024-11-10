import { ConfigService } from './config.service'

const dotenv = {
  config() {
    calls.dotenv.config = true
    return {
      error: null,
      parsed: {
        PORT: '3000'
      }
    }
  }
}

const dependencies: any = {
  dotenv
}
let instance: ConfigService
let calls: any = {
  dotenv: {}
}

beforeEach(() => {
  instance = new ConfigService(dependencies)
  calls = {
    dotenv: {}
  }
})

describe('ConfigService', () => {
  describe('getEnvs', () => {
    it('should return the environment variables', () => {
      const r = instance.getEnvs()
      expect(r).toEqual({ PORT: '3000' })
    })
    it('should call dotenv', () => {
      instance.getEnvs()
      expect(calls.dotenv.config).toBe(true)
    })
  })
})
