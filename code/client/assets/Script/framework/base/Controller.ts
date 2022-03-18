import { SplsBase } from "./SplsBase"
export class Controller extends SplsBase {
    static getInstance<T extends {}>(this: new () => T): T {
        if(!(<any>this).instance){
            (<any>this).instance = new this();
        }
        return (<any>this).instance;
    }

    checkApiPrint() {
        
    }
}