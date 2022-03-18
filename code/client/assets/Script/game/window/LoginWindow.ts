
import { _decorator, Component, Node, find, CCObject, Button, EditBox } from 'cc';
const { ccclass, property } = _decorator;
import { BaseWindow } from '../../framework/base/BaseWindow'
import { Spls } from '../utils/global'

// @ccclass('LoginWindow')
export class LoginWindow extends BaseWindow {
    btnOk : Button;
    btnCancel : Button;
    editUser : EditBox;
    constructor () {
        super();
    }

    initWindow(name: string, node: Node) {
        super.initWindow(name, node);

        this.btnOk = find("btnLogin", this.node).getComponent(Button);
        this.btnCancel = find("btnCancel", this.node).getComponent(Button);
        this.editUser = find("inputUserName", node).getComponent(EditBox);

        this.btnOk.node.on(Button.EventType.CLICK, this.onLogin.bind(this), this)
        this.btnCancel.node.on(Button.EventType.CLICK, this.onCancel.bind(this), this)
    }

    onLogin() {
        let username:string = this.editUser.textLabel.string;
        if (!username || username == "") {
            Spls.log.Info(username);
            return;
        }
        Spls.ctrl.Account.Login(username, null);
    }

    onCancel() {
        this.close()
    }
}