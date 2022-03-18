
import { _decorator, Component, Node, resources } from 'cc';
const { ccclass, property } = _decorator;

import { Spls, InitGlobalVariable } from './utils/global'


@ccclass('Main')
export class Main extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    start () {
        InitGlobalVariable();

        Spls.ctrl.WindowMgr.initialize(this.node)
        Spls.ctrl.WindowMgr.openWindow("LoginWindow")
        // [3]
    }

    onClick() {
        // NetMgr.Enter("heheda");
    }
}