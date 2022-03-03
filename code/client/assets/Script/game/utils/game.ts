import { WindowMgr } from "../../framework/base/WindowMgr"
import { AccountController } from "../controller/AccountController"
import { NetController } from "../controller/NetController"

class Controller {
    private constructor() { }
    private static instance : Controller;
    static getInstance() :Controller{
        if (!this.instance) {
            this.instance = new Controller()
        }
        return this.instance;
    }
    
    Account : AccountController;
    Net : NetController;
    WindowMgr : WindowMgr;
}

export class CCGame {
    static ctrl = Controller.getInstance();
    static log = {
        Info : function(str) {
            console.log(str);
        }
    }
}

let InitGlobalVariable: Function = function() {
    CCGame.ctrl.Account = AccountController.getInstance();
    CCGame.ctrl.Net = NetController.getInstance();
    CCGame.ctrl.WindowMgr = WindowMgr.getInstance(); 
}

export {InitGlobalVariable}