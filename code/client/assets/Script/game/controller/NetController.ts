import { Spls } from "../utils/global";
import { Controller } from '../../framework/base/Controller'
import { ProtocolMap, ProtocolArray } from "../const/ProtocolRoute"
import { EnterReqData } from "../const/ProtocolData"

export class NetController extends Controller {
    conn : pomelo;
    isConnect: boolean = false;

    public Connect(username:string, host : string, port : number) {
        if (!this.conn) {
            this.conn = createPomelo();
        }
        
        this.conn.init({
            host: host,
            port: port,
            log: true
            }, this.ConnectSuccess.bind(this, username));
    }

    ConnectSuccess(username:string) {
        Spls.log.Info("Start Login Account");
        let reqData:EnterReqData = new EnterReqData();
        reqData.username = username;
        reqData.rid = "2333";
        for(let route in ProtocolArray) {
            let routeName = ProtocolArray[route];

            this.conn.on(routeName, this.onMessageCb.bind(this, routeName));
        }
        this.request(ProtocolMap.enter, reqData);
    }

    public onMessageCb(route, data) {
        this.dispacthEvent(route, data);
    }

    public request(route: string, data) {
        this.conn.request(route, data, this.requestBack.bind(this, route));
    }

    requestBack(route, data) {
        this.dispacthEvent(route, data);
    }
}