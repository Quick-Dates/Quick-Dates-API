"use strict";
module.exports = {
    "type": "postgres",
    "url": process.env.DATABASE_URL,
    "entities": [process.env.NODE_ENV === 'production' ? "**/models/*.js" : "**/models/*.ts"],
    "migrations": [process.env.NODE_ENV === 'production' ? "./dist/src/shared/database/migrations/*.js" : "./src/shared/database/migrations/*.ts"],
    "cli": {
        "migrationsDir": "./src/shared/database/migrations"
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JtY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsib3JtY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxNQUFNLENBQUMsT0FBTyxHQUFHO0lBQ2YsTUFBTSxFQUFFLFVBQVU7SUFDbEIsS0FBSyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWTtJQUMvQixVQUFVLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsS0FBSyxZQUFZLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBRTtJQUMxRixZQUFZLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsS0FBSyxZQUFZLENBQUMsQ0FBQyxDQUFDLDRDQUE0QyxDQUFDLENBQUMsQ0FBQyx1Q0FBdUMsQ0FBQztJQUM5SSxLQUFLLEVBQUU7UUFDTCxlQUFlLEVBQUUsa0NBQWtDO0tBQ3BEO0NBQ0YsQ0FBQSJ9