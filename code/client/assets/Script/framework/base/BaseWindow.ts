
import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

import { SplsBase } from './SplsBase'
import { EventMsg } from "../../game/const/EventMsg"

export class BaseWindow extends SplsBase {
    node : Node;
    windowName : string;
    constructor() {
        super();
    }

    initWindow(name: string, node: Node) {
        this.node = node;
        this.windowName = name;
    }

    dispose() {
        if(this.node) {
            this.node._destroyImmediate();
            this.node = null;
        }
    }

    close() {
        this.dispacthEvent(EventMsg.CloseWindow, {name : this.windowName})
    }
}