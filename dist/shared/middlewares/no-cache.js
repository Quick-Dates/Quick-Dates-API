"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.noCache = void 0;
var noCache = function (req, res, next) {
    res.set('cache-control', 'no-store, no-cache, must-revalidade, proxy-revalidade');
    res.set('pragma', 'no-cache');
    res.set('surrogate-control', 'no-store');
    res.set('expires', '0');
    res.set('surrogate-control', 'no-store');
    next();
};
exports.noCache = noCache;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm8tY2FjaGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc2hhcmVkL21pZGRsZXdhcmVzL25vLWNhY2hlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVPLElBQU0sT0FBTyxHQUFHLFVBQUMsR0FBWSxFQUFFLEdBQWEsRUFBRSxJQUFrQjtJQUNyRSxHQUFHLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSx1REFBdUQsQ0FBQyxDQUFBO0lBQ2pGLEdBQUcsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFBO0lBQzdCLEdBQUcsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsVUFBVSxDQUFDLENBQUE7SUFDeEMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUE7SUFDdkIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxVQUFVLENBQUMsQ0FBQTtJQUN4QyxJQUFJLEVBQUUsQ0FBQTtBQUNSLENBQUMsQ0FBQTtBQVBZLFFBQUEsT0FBTyxXQU9uQiJ9