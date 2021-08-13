"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let cronInstance;
function default_1(app) {
    if (cronInstance) {
        return cronInstance;
    }
    return cronInstance = new CronTest(app);
}
exports.default = default_1;
class CronTest {
    constructor(app) {
    }
    async onlineCron() {
        console.log("online cron", Date.now());
    }
}
exports.CronTest = CronTest;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JvblRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9hcHAvc2VydmVycy9jaGF0L2Nyb24vY3JvblRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxJQUFJLFlBQXNCLENBQUE7QUFFMUIsbUJBQXlCLEdBQUc7SUFDeEIsSUFBSSxZQUFZLEVBQUU7UUFDZCxPQUFPLFlBQVksQ0FBQTtLQUN0QjtJQUNELE9BQU8sWUFBWSxHQUFHLElBQUksUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFBO0FBQzNDLENBQUM7QUFMRCw0QkFLQztBQUVELE1BQWEsUUFBUTtJQUNqQixZQUFZLEdBQWdCO0lBQzVCLENBQUM7SUFFTSxLQUFLLENBQUMsVUFBVTtRQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQTtJQUMxQyxDQUFDO0NBQ0o7QUFQRCw0QkFPQyJ9