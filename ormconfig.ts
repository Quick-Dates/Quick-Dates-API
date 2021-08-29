console.log(process.env.DATABASE_URL);
module.exports = {
  "type": "postgres",
  "url": process.env.DATABASE_URL,
  "entities": [process.env.NODE_ENV === 'production' ? "**/models/*.js" : "**/models/*.ts" ],
  "migrations": [process.env.NODE_ENV === 'production' ? "./dist/shared/database/migrations/*.js" : "./src/shared/database/migrations/*.ts"],
  "cli": {
    "migrationsDir": "./src/shared/database/migrations"
  },
  "extra": process.env.NODE_ENV === 'production' ? {
    "ssl": {
        "rejectUnauthorized": false
    }
    } : {}

}
