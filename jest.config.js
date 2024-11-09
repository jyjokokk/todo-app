/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: 'node',
  rootDir: '.',
  testRegex: '.*\\.spec\\.ts$',
  coverageDirectory: './coverage',
  transform: {
    '^.+.tsx?$': ['ts-jest', {}]
  },
  rootDir: '.',
  roots: ['<rootDir>/src/'],
  coverageThreshold: {
    global: {
      statements: 75,
      branches: 75,
      functions: 75,
      lines: 75
    }
  },

  bail: true,

  testTimeout: 30000
}
