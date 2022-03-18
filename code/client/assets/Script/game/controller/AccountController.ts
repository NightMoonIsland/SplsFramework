import { Spls } from '../utils/global'
import { Controller } from '../../framework/base/Controller'
import { ProtocolMap } from '../const/ProtocolRoute';
import { QueryData } from '../const/ProtocolData';

export class AccountController extends Controller {
    conn : pomelo;
    uid : string;

    public Login(uid) {
        this.uid = uid;
        if (this.conn) {
            this.conn = null;
        }
        var host = window.location.hostname;
        var port = 3014;
        this.conn = createPomelo();
        this.conn.init({
            host: host,
            port: port,
            log: true
            }, this.Enter.bind(this, uid));
    }

    Enter(uid: string) {
        let reqData: QueryData = new QueryData();
        reqData.uid = uid;

        this.conn.request(ProtocolMap.query, reqData, this.EnterCallback.bind(this))
    }

    EnterCallback(data) {
        this.conn.disconnect(null);
        this.conn = null;
    
        if(data.code === 500) {
            // showError(LOGIN_ERROR);
            return;
        }
        Spls.log.Info("Connect Gate Success")
        Spls.ctrl.Net.Connect(this.uid, data.host, data.port);
    }
}