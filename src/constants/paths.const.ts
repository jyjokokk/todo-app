/**
 * Constants for different paths to resources (like local database files, storage keys etc.)
 */

import configService from '../infrastructure/config/config.service'

export const DATABASE_URI = configService.getConfig().DATABASE_URI
