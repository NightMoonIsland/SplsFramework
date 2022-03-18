
import { _decorator, Component, Node, find, CCObject, Button } from 'cc';
const { ccclass, property } = _decorator;
import { BaseWindow } from '../../framework/base/BaseWindow'
import { Spls } from '../utils/global'

// @ccclass('LoginWindow')
export class LoginWindow extends BaseWindow {
    btnOk : Button;
    btnCancel : Button;
    constructor () {
        super();
    }

    initWindow(name: string, node: Node) {
        super.initWindow(name, node);
        let nodeBtnOk: Node = find("btnLogin", this.node);
        this.btnOk = nodeBtnOk.getComponent(Button);
        let nodeBtnCancel: Node = find("btnCancel", this.node);
        this.btnCancel = nodeBtnCancel.getComponent(Button);
        

        this.btnOk.node.on(Button.EventType.CLICK, this.onLogin.bind(this), this)
        this.btnCancel.node.on(Button.EventType.CLICK, this.onCancel.bind(this), this)
        Spls.ctrl.Account.Login("userName", null);
    }

    onLogin() {

    }

    onCancel() {
        this.close()
    }
}