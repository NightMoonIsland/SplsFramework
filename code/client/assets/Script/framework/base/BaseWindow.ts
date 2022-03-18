
import { _decorator, Component, Node, Widget } from 'cc';
const { ccclass, property } = _decorator;

import { SplsBase } from './SplsBase'
import { EventMsg } from "../../game/const/EventMsg"

export class BaseWindow extends SplsBase {
    node : Node;
    windowName : string;
    constructor() {
        super();
    }

    initialize(name: string, node: Node, uiRoot: Node) {
        this.node = node;
        // let nodeWidget = node.getComponent(Widget);

        // nodeWidget.target = uiRoot;
        // nodeWidget.isAlignLeft = true;
        // nodeWidget.isAlignRight = true;
        // nodeWidget.isAlignTop = true;
        // nodeWidget.isAlignBottom = true;

        // nodeWidget.editorLeft = 0;
        // nodeWidget.editorRight = 0;
        // nodeWidget.editorTop = 0;
        // nodeWidget.editorBottom = 0;

        this.windowName = name;
    }

    initWindow(name: string, node: Node) {
        this.node = node;
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