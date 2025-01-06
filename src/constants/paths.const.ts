/**
 * Constants for different paths to resources (like local database files, storage keys etc.)
 */

import configService from '../infrastructure/config/config.service'

export const DATABASE_URI = configService.config.DATABASE_URI
export const PORT = configService.config.PORT
