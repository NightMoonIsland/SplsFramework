
import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

import { EventSystem } from "./EventSystem"

export class SplsBase {
    eventSystem : EventSystem = EventSystem.getInstance();
    registerEvent(eventName:string, callback:Function) {
        this.eventSystem.registerEvent(eventName, callback);
    }

    unregisterEvent(eventName:string, callback:Function) {
        this.eventSystem.unregisterEvent(eventName, callback);
    }

    dispacthEvent(eventName:string, data:any) {
        this.eventSystem.dispacthEvent(eventName, data);
    }
}