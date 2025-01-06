// TODO: Separate config for development and production by key

const config = {
  PORT: 3030,
  DATABASE_URI: 'local.db',
  LOCAL: {
    DATABASE_URI: 'development.db',
    PORT: 3030
  },
  DEVELOPMENT: {
    DATABASE_URI: 'development.db',
    PORT: 3030
  },
  PRODUCTION: {
    DATABASE_URI: 'development.db',
    PORT: 3030
  }
} as const

export default config
