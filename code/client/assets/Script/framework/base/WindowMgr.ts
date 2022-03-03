
import { _decorator, Component, Node, resources, Prefab, instantiate } from 'cc';
const { ccclass, property } = _decorator;
import {BaseWindow} from './BaseWindow'
// import {UILogin} from '../../game/window/UILogin'
// declare let require: (string) => any;
import { WindowsMap } from "../../game/utils/const"

export class WindowMgr {
    node: Node;
    private constructor() { }
    private static instance : WindowMgr;
    public static getInstance() :WindowMgr{
        if (!this.instance) {
            this.instance = new WindowMgr()
        }
        return this.instance;
    }

    initialize(node: Node) {
        this.node = node;
    }

    openWindowsMap : BaseWindow []
    //
    // 打开指定UI
    //
    openWindow(windowName) : BaseWindow {
        // if (this.openWindowsMap[windowName] ) {
        //     return this.openWindowsMap[windowName]
        // }
        if(this.openWindowsMap[windowName]) {
            return;
        }
        let cls = WindowsMap[windowName]
        // let requireCls = require("../../game/window/UILogin");
        // let uiCls = requireCls.default;
        // let uiIns = new uiCls();
        // // let window = import {} from 
        // return uiIns
        let windowCls = new cls() as BaseWindow

        let prefabPath = "prefab/" + windowName;

        resources.load(prefabPath, Prefab, (err, prefab) => {
            const newNode = instantiate(prefab);
            this.node.addChild(newNode);
            windowCls.setPrefab(newNode)
            windowCls.initWindow()
        });
        this.openWindowsMap[windowName] = windowCls;

        return windowCls
    }

    closeWindow(windowName) {
        if(this.openWindowsMap[windowName]) {
            
            this.openWindowsMap[windowName] = null;
        }
    }
}