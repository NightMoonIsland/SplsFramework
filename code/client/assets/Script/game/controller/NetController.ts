
// import { G } from '../utils/game'

import { Spls } from "../utils/global";

import { Controller } from '../../framework/base/Controller'

export class NetController extends Controller {
    username : string;
    conn : pomelo;
    route : string = 'connector.entryHandler.enter';
    isConnect: boolean = false;

    public Connect(username:string, host : string, port : number) {
        this.username = username;
        if (!this.conn) {
            this.conn = createPomelo();
        }
        
        this.conn.init({
            host: host,
            port: port,
            log: true
            }, this.ConnectSuccess.bind(this));
    }

    ConnectSuccess(data) {
        Spls.log.Info("Start Login Account");
        this.request(this.route, {username: this.username, rid :"2333"}, this.LoginCallback.bind(this));
    }

    public request(route: string, data, callback: Function) {
        // if(!this.conn) {
        //     return;
        // }

        // if(!this.isConnect) {
        //     return; 
        // }
        this.conn.request(route, data, callback);
    }

    LoginCallback(data) {
        if(data.code === 500) {
            // showError(LOGIN_ERROR);
            return;
        }
        let users : [] = data.users;
        if(users) {
            Spls.log.Info("users" + users.length);
        }
    }
}