
import { _decorator, Component, Node, resources } from 'cc';
const { ccclass, property } = _decorator;

import { NetMgr } from '../framework/base/NetMgr'
import { CCGame, InitGlobalVariable } from '../game/utils/game'


@ccclass('Main')
export class Main extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    start () {
        InitGlobalVariable();

        CCGame.ctrl.WindowMgr.initialize(this.node)
        CCGame.ctrl.WindowMgr.openWindow("LoginWindow")
        // [3]
    }

    onClick() {
        // NetMgr.Enter("heheda");
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
