import { CCGame } from '../utils/game'

export class AccountController {
    private constructor() { }
    private static instance : AccountController;
    static getInstance() :AccountController{
        if (!this.instance) {
            this.instance = new AccountController()
        }
        return this.instance;
    }

    conn : pomelo;
    route : string = 'gate.gateHandler.queryEntry';

    public Login(uid, callback) {
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
        CCGame.log.Info("Login Gate Success")
        // CCGame.ctrl.Net.Init(data.host, data.port);
    }
}