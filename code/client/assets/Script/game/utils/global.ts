import { WindowMgr } from "../controller/WindowMgr"
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

export class Spls {
    static ctrl: Controller;
    static log = {
        Info : function(str) {
            console.log(str);
        }
    }
}

let InitGlobalVariable: Function = function() {
    Spls.ctrl = Controller.getInstance()
    Spls.ctrl.Account = AccountController.getInstance();
    Spls.ctrl.Net = NetController.getInstance();
    Spls.ctrl.WindowMgr = WindowMgr.getInstance();
}

export {InitGlobalVariable}