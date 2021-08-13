"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TestComponent {
    constructor(app) {
        this.name = "TestComponent";
        this.app = app;
        this.app.set(this.name, this);
    }
    start(cb) {
        console.log("TestComponent  start", this.app.getServerId());
        cb();
    }
    stop(force, cb) {
        console.log("TestComponent stop", force, this.app.getServerId());
        cb();
    }
}
exports.TestComponent = TestComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdGNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FwcC9jb21wb25lbnRzL3Rlc3Rjb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHQSxNQUFhLGFBQWE7SUFJdEIsWUFBWSxHQUFnQjtRQUg1QixTQUFJLEdBQUcsZUFBZSxDQUFDO1FBSW5CLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUNqQyxDQUFDO0lBRUQsS0FBSyxDQUFDLEVBQWM7UUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUE7UUFDM0QsRUFBRSxFQUFFLENBQUE7SUFDUixDQUFDO0lBRUQsSUFBSSxDQUFDLEtBQWMsRUFBRSxFQUFjO1FBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQTtRQUNoRSxFQUFFLEVBQUUsQ0FBQTtJQUNSLENBQUM7Q0FDSjtBQWxCRCxzQ0FrQkMifQ==