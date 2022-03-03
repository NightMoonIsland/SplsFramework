
import { _decorator, Component, Node, find, CCObject, Button } from 'cc';
const { ccclass, property } = _decorator;
import { BaseWindow } from '../../framework/base/BaseWindow'
import { CCGame } from '../utils/game'

// @ccclass('LoginWindow')
export class LoginWindow extends BaseWindow {
    btnOk : Button
    constructor () {
        super();
    }

    initWindow() {
        super.initWindow();
        let btn: Node = find("btnLogin", this.node);
        this.btnOk = btn.getComponent(Button);
        let clickHandler = function() {

        }
        this.btnOk.node.on(Button.EventType.CLICK, this.callback, this)
        CCGame.ctrl.Account.Login("userName", null);
        
    }

    callback() {
        
    }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.0/manual/en/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.0/manual/en/scripting/ccclass.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.0/manual/en/scripting/life-cycle-callbacks.html
 */
