
import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;
import { Singleton } from "./Singleton"

export class EventSystem extends Singleton{
    eventMap : {[key: string]: Function[] } = {};

    registerEvent(eventName:string, callback:Function) {
        if(!this.eventMap[eventName]) {
            this.eventMap[eventName] = []
        }
        this.eventMap[eventName].push(callback);
    }

    unregisterEvent(eventName:string, callback:Function) {
        if(this.eventMap[eventName]) {
            let index = this.eventMap[eventName].indexOf(callback)
            if (index != -1) {
                this.eventMap[eventName].splice(index, 1)
            }
        }
    }

    dispacthEvent(eventName:string, data:any) {
        if(this.eventMap[eventName]) {
            console.log(this.eventMap[eventName].length)
            this.eventMap[eventName].forEach(callback => {
                callback(data);
            });
        }
    }
}