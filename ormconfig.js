"use strict";
console.log(process.env.DATABASE_URL);
module.exports = {
    "type": "postgres",
    "url": process.env.DATABASE_URL,
    "entities": [process.env.NODE_ENV === 'production' ? "**/models/*.js" : "**/models/*.ts"],
    "migrations": [process.env.NODE_ENV === 'production' ? "./dist/src/shared/database/migrations/*.js" : "./src/shared/database/migrations/*.ts"],
    "cli": {
        "migrationsDir": "./src/shared/database/migrations"
    },
    "extra": {
        "ssl": {
            "rejectUnauthorized": false
        }
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JtY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsib3JtY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDdEMsTUFBTSxDQUFDLE9BQU8sR0FBRztJQUNmLE1BQU0sRUFBRSxVQUFVO0lBQ2xCLEtBQUssRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVk7SUFDL0IsVUFBVSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEtBQUssWUFBWSxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUU7SUFDMUYsWUFBWSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEtBQUssWUFBWSxDQUFDLENBQUMsQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDLENBQUMsdUNBQXVDLENBQUM7SUFDOUksS0FBSyxFQUFFO1FBQ0wsZUFBZSxFQUFFLGtDQUFrQztLQUNwRDtJQUNELE9BQU8sRUFBRTtRQUNQLEtBQUssRUFBRTtZQUNMLG9CQUFvQixFQUFFLEtBQUs7U0FDNUI7S0FDRjtDQUNGLENBQUEifQ==