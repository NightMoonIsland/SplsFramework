import { WindowMgr } from "../controller/WindowMgr"
import { AccountController } from "../controller/AccountController"
import { NetController } from "../controller/NetController"

import { Account } from "../model/Account"

//Controller
class ControllerMgr {
    private constructor() { }
    private static instance : ControllerMgr;
    static getInstance() :ControllerMgr{
        if (!this.instance) {
            this.instance = new ControllerMgr()
        }
        return this.instance;
    }
    
    Account : AccountController;
    Net : NetController;
    WindowMgr : WindowMgr;
}

//Model
class ModelMgr {
    private constructor() { }
    private static instance : ModelMgr;
    static getInstance() :ModelMgr{
        if (!this.instance) {
            this.instance = new ModelMgr()
        }
        return this.instance;
    }
    Account : Account;
}

//Global
export class Spls {
    static ctrl: ControllerMgr;
    static model: ModelMgr;
    static log = {
        Info : function(str) {
            console.log(str);
        }
    }
}

let InitGlobalVariable: Function = function() {
    Spls.ctrl = ControllerMgr.getInstance()
    Spls.ctrl.Account = AccountController.getInstance();
    Spls.ctrl.Net = NetController.getInstance();
    Spls.ctrl.WindowMgr = WindowMgr.getInstance();

    Spls.model = ModelMgr.getInstance();
    Spls.model.Account = Account.getInstance();
}

export {InitGlobalVariable}