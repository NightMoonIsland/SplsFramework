
// import { G } from '../utils/game'

export class NetController {
    private constructor() { }
    private static instance : NetController;
    static getInstance() :NetController{
        if (!this.instance) {
            this.instance = new NetController()
        }
        return this.instance;
    }

    conn : pomelo;
    route : string = 'gate.gateHandler.queryEntry';
    isConnect: boolean = false;

    public Connect(host : string, port : number) {
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

    }

    public request(route: string, data) {
        if(!this.conn) {
            return;
        }

        if(!this.isConnect) {
            return; 
        }
    }
}