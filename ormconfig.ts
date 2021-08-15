module.exports = {
  "type": "postgres",
  "url": process.env.DATABASE_URL,
  "entities": [process.env.DIRECTORY_MODELS],
  "migrations": [process.env.DIRECTORY_MIGRATIONS],
  "cli": {
    "migrationsDir": "./src/shared/database/migrations"
  }
}
