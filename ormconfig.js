"use strict";
module.exports = {
    "type": "postgres",
    "url": process.env.DATABASE_URL,
    "entities": [process.env.NODE_ENV === 'production' ? "**/models/*.js" : "**/models/*.ts"],
    "migrations": [process.env.NODE_ENV === 'production' ? "./dist/shared/database/migrations/*.js" : "./src/shared/database/migrations/*.ts"],
    "cli": {
        "migrationsDir": "./src/shared/database/migrations"
    },
    "extra": process.env.NODE_ENV === 'production' ? {
        "ssl": {
            "rejectUnauthorized": false
        }
    } : {}
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JtY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsib3JtY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxNQUFNLENBQUMsT0FBTyxHQUFHO0lBQ2YsTUFBTSxFQUFFLFVBQVU7SUFDbEIsS0FBSyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWTtJQUMvQixVQUFVLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsS0FBSyxZQUFZLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBRTtJQUMxRixZQUFZLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsS0FBSyxZQUFZLENBQUMsQ0FBQyxDQUFDLHdDQUF3QyxDQUFDLENBQUMsQ0FBQyx1Q0FBdUMsQ0FBQztJQUMxSSxLQUFLLEVBQUU7UUFDTCxlQUFlLEVBQUUsa0NBQWtDO0tBQ3BEO0lBQ0QsT0FBTyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxLQUFLLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFDL0MsS0FBSyxFQUFFO1lBQ0gsb0JBQW9CLEVBQUUsS0FBSztTQUM5QjtLQUNBLENBQUMsQ0FBQyxDQUFDLEVBQUU7Q0FFVCxDQUFBIn0=