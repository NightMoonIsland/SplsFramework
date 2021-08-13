export class NetMgr {

    static Connect() {

        var route = 'gate.gateHandler.queryEntry';
        pomelo.init({
            host: window.location.hostname,
            port: 3014,
            log: true
            }, function() {
                console.log("wolegeff qu");
        });
    }
}