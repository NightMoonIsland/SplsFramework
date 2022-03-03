
import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('BaseWindow')
export class BaseWindow {
    node : Node;
    constructor() {
        
    }


    setPrefab(node: Node) {
        this.node = node;
    }

    initWindow() {
        
    }

    dispose() {
        if(this.node) {
            
        }
    }
}