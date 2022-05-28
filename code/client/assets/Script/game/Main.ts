
import { _decorator, Component, Node, resources, game } from 'cc';
const { ccclass, property } = _decorator;

import { Spls, InitGlobalVariable } from './utils/global'


@ccclass('Main')
export class Main extends Component {
    
    start () {
        InitGlobalVariable();
        game.addPersistRootNode(this.node);
        Spls.ctrl.WindowMgr.initialize(this.node);
        Spls.ctrl.WindowMgr.openWindow("LoginWindow");
    }

    onClick() {
        // NetMgr.Enter("heheda");
    }
}