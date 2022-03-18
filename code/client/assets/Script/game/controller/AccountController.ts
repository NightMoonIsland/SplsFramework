import { Spls } from '../utils/global'
import { Controller } from '../../framework/base/Controller'

export class AccountController extends Controller {
    conn : pomelo;
    route : string = 'gate.gateHandler.queryEntry';
    uid : string;

    public Login(uid, callback) {
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
            }, this.Enter.bind(this, uid, callback));
    }

    Enter(uid: string, callback: Function) {
        this.conn.request(this.route, {uid: uid}, this.EnterCallback.bind(this))
    }

    EnterCallback(data) {
        this.conn.disconnect(null);
        if(data.code === 500) {
            // showError(LOGIN_ERROR);
            return;
        }
        Spls.log.Info("Connect Gate Success")
        Spls.ctrl.Net.Connect(this.uid, data.host, data.port);
    }
}