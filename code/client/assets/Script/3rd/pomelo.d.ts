declare class pomelo {
    constructor();
    
    init(params, cb: Function);

    request(route, msg, cb: Function);

    disconnect(cb: Function);
}
declare function createPomelo() : pomelo;