
import { _decorator, Component, Node, resources, Prefab, instantiate } from 'cc';
const { ccclass, property } = _decorator;
import {BaseWindow} from '../../framework/base/BaseWindow'
// import {UILogin} from '../../game/window/UILogin'
// declare let require: (string) => any;
import { WindowsMap } from "../const/Windows"
import { EventMsg } from "../const/EventMsg"

import { Controller } from '../../framework/base/Controller'

export class WindowMgr extends Controller {
    node: Node;

    constructor() {
        super()
        this.registerEvent(EventMsg.CloseWindow, this.recCloseWindow.bind(this));
    }

    initialize(node: Node) {
        this.node = node;
    }

    openWindowsMap : {[key:string]: BaseWindow} = {};
    //
    // 打开指定UI
    //
    openWindow(windowName : string) : BaseWindow {
        if(this.openWindowsMap[windowName] != null) {
            return;
        }
        let cls = WindowsMap[windowName]
        
        let windowCls = new cls() as BaseWindow
        let prefabPath = "prefab/" + windowName;

        resources.load(prefabPath, Prefab, (err, prefab) => {
            const newNode = instantiate(prefab);
            this.node.addChild(newNode);
            windowCls.initWindow(windowName, newNode);
        });
        this.openWindowsMap[windowName] = windowCls;

        return windowCls
    }

    closeWindow(windowName) {
        if(this.openWindowsMap[windowName]) {
            this.openWindowsMap[windowName].dispose();
            this.openWindowsMap[windowName] = null;
        }
    }

    recCloseWindow(data : {name:string}) {
        this.closeWindow(data.name);
    }
}