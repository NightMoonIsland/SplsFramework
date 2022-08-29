
import { _decorator, Component, Node, resources, Prefab, instantiate, Vec3 } from 'cc';
const { ccclass, property } = _decorator;
import {BaseWindow} from '../../framework/base/BaseWindow'
import { WindowsMap } from "../const/Windows"
import { EventMsg } from "../const/EventMsg"

import { Controller } from '../../framework/base/Controller'

export class WindowMgr extends Controller {
    uiRoot: Node;

    constructor() {
        super()
        this.registerEvent(EventMsg.CloseWindow, this.recCloseWindow.bind(this));
    }

    initialize(node: Node) {
        this.uiRoot = node;
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
            this.uiRoot.addChild(newNode);
            newNode.position = Vec3.ZERO;
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