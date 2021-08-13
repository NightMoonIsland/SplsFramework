"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pinus_1 = require("pinus");
require("./app/servers/user.rpc.define");
const routeUtil = require("./app/util/routeUtil");
const preload_1 = require("./preload");
const testcomponent_1 = require("./app/components/testcomponent");
// TODO 需要整理。
const _pinus = require("pinus");
const filePath = _pinus.FILEPATH;
filePath.MASTER = '/config/master';
filePath.SERVER = '/config/servers';
filePath.CRON = '/config/crons';
filePath.LOG = '/config/log4js';
filePath.SERVER_PROTOS = '/config/serverProtos';
filePath.CLIENT_PROTOS = '/config/clientProtos';
filePath.MASTER_HA = '/config/masterha';
filePath.LIFECYCLE = '/lifecycle';
filePath.SERVER_DIR = '/app/servers/';
filePath.CONFIG_DIR = '/config';
const adminfilePath = _pinus.DEFAULT_ADMIN_PATH;
adminfilePath.ADMIN_FILENAME = 'adminUser';
adminfilePath.ADMIN_USER = 'config/adminUser';
/**
 *  替换全局Promise
 *  自动解析sourcemap
 *  捕获全局错误
 */
preload_1.preload();
/**
 * Init app for client.
 */
let app = pinus_1.pinus.createApp();
app.set('name', 'chatofpomelo-websocket');
// app configuration
app.configure('production|development', 'connector', function () {
    app.set('connectorConfig', {
        connector: pinus_1.pinus.connectors.hybridconnector,
        heartbeat: 60,
        useDict: true,
        useProtobuf: true
    });
    // 不自动按照路由生成router,仅使用 config/dictionary 内的路由.
    // 具体看 packages/pinus/lib/components/dictionary.ts DictionaryComponentOptions
    app.set('dictionaryConfig', {
        ignoreAutoRouter: true,
    });
    /**
     // 缓存大小不够 日志示例
     [2020-03-27T10:44:48.752] [ERROR] pinus - [chat-server-1 channelService.js] [pushMessage] fail to dispatch msg to serverId: connector-server-1, err:RangeError [ERR_OUT_OF_RANGE]: The value of "offset" is out of range. It must be >= 0 and <= 0. Received 1
     at boundsError (internal/buffer.js:53:9)
     at writeU_Int8 (internal/buffer.js:562:5)
     at Buffer.writeUInt8 (internal/buffer.js:569:10)
     at Encoder.writeBytes (F:\develop\gong4-server\logicServer\pinus\packages\pinus-protobuf\lib\encoder.ts:195:20)
     */
    app.set('protobufConfig', {
        // protobuf Encoder 使用 5m 的缓存 需要保证每个消息不会超过指定的缓存大小，超过了就会抛出异常
        encoderCacheSize: 5 * 1024 * 1024,
        // decode 对客户端请求消息做校验
        decodeCheckMsg: true,
    });
});
app.configure('production|development', 'gate', function () {
    app.set('connectorConfig', {
        connector: pinus_1.pinus.connectors.hybridconnector,
        useProtobuf: true
    });
});
function errorHandler(err, msg, resp, session, cb) {
    console.error(`${pinus_1.pinus.app.serverId} error handler msg[${JSON.stringify(msg)}] ,resp[${JSON.stringify(resp)}] ,
    to resolve unknown exception: sessionId:${JSON.stringify(session.export())} ,
     error stack: ${err.stack}`);
    if (!resp) {
        resp = { code: 1003 };
    }
    cb(err, resp);
}
function globalErrorHandler(err, msg, resp, session, cb) {
    console.error(`${pinus_1.pinus.app.serverId} globalErrorHandler msg[${JSON.stringify(msg)}] ,resp[${JSON.stringify(resp)}] ,
    to resolve unknown exception: sessionId:${JSON.stringify(session.export())} ,
     error stack: ${err.stack}`);
    if (cb) {
        cb(err, resp ? resp : { code: 503 });
    }
}
exports.globalErrorHandler = globalErrorHandler;
// app configure
app.configure('production|development', function () {
    app.load(new testcomponent_1.TestComponent(app));
    app.set(pinus_1.RESERVED.ERROR_HANDLER, errorHandler);
    app.set(pinus_1.RESERVED.GLOBAL_ERROR_HANDLER, globalErrorHandler);
    app.globalAfter((err, routeRecord, msg, session, resp, cb) => {
        console.log('global after ', err, routeRecord, msg);
    });
    app.globalBefore((routeRecord, msg, session, cb) => {
        if (msg.body === null) {
            cb(new Error(`msg body ===null maybe protobuf check error uid:${session.uid} ${JSON.stringify(msg)}`), { code: 499 });
            return;
        }
        cb(null);
    });
    // route configures
    app.route('chat', routeUtil.chat);
    // filter configures
    app.filter(new pinus_1.pinus.filters.timeout());
    // RPC 启用TCP协议
    app.set('proxyConfig', {
        mailboxFactory: pinus_1.createTcpMailBox,
    });
    app.set('remoteConfig', {
        acceptorFactory: pinus_1.createTcpAcceptor,
    });
});
app.configure('development', function () {
    // enable the system monitor modules
    app.enable('systemMonitor');
});
if (app.isMaster()) {
    console.log("is master");
    //   app.use(createRobotPlugin({scriptFile: __dirname + '/robot/robot.js'}));
}
else {
    console.log("is not master");
}
// start app
app.start();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaUNBUWU7QUFDZix5Q0FBc0M7QUFDdEMsa0RBQW1EO0FBQ25ELHVDQUFvQztBQUNwQyxrRUFBK0Q7QUFFL0QsYUFBYTtBQUNiLGdDQUFpQztBQUVqQyxNQUFNLFFBQVEsR0FBSSxNQUFjLENBQUMsUUFBUSxDQUFDO0FBQzFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsZ0JBQWdCLENBQUM7QUFDbkMsUUFBUSxDQUFDLE1BQU0sR0FBRyxpQkFBaUIsQ0FBQztBQUNwQyxRQUFRLENBQUMsSUFBSSxHQUFHLGVBQWUsQ0FBQztBQUNoQyxRQUFRLENBQUMsR0FBRyxHQUFHLGdCQUFnQixDQUFDO0FBQ2hDLFFBQVEsQ0FBQyxhQUFhLEdBQUcsc0JBQXNCLENBQUM7QUFDaEQsUUFBUSxDQUFDLGFBQWEsR0FBRyxzQkFBc0IsQ0FBQztBQUNoRCxRQUFRLENBQUMsU0FBUyxHQUFHLGtCQUFrQixDQUFDO0FBQ3hDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsWUFBWSxDQUFDO0FBQ2xDLFFBQVEsQ0FBQyxVQUFVLEdBQUcsZUFBZSxDQUFDO0FBQ3RDLFFBQVEsQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO0FBRWhDLE1BQU0sYUFBYSxHQUFHLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQztBQUNoRCxhQUFhLENBQUMsY0FBYyxHQUFHLFdBQVcsQ0FBQztBQUMzQyxhQUFhLENBQUMsVUFBVSxHQUFHLGtCQUFrQixDQUFDO0FBQzlDOzs7O0dBSUc7QUFDSCxpQkFBTyxFQUFFLENBQUM7QUFFVjs7R0FFRztBQUNILElBQUksR0FBRyxHQUFHLGFBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQztBQUM1QixHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSx3QkFBd0IsQ0FBQyxDQUFDO0FBRTFDLG9CQUFvQjtBQUNwQixHQUFHLENBQUMsU0FBUyxDQUFDLHdCQUF3QixFQUFFLFdBQVcsRUFBRTtJQUNqRCxHQUFHLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUNyQjtRQUNJLFNBQVMsRUFBRSxhQUFLLENBQUMsVUFBVSxDQUFDLGVBQWU7UUFDM0MsU0FBUyxFQUFFLEVBQUU7UUFDYixPQUFPLEVBQUUsSUFBSTtRQUNiLFdBQVcsRUFBRSxJQUFJO0tBQ3BCLENBQUMsQ0FBQztJQUNQLDhDQUE4QztJQUM5Qyw2RUFBNkU7SUFDN0UsR0FBRyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRTtRQUN4QixnQkFBZ0IsRUFBRSxJQUFJO0tBQ3pCLENBQUMsQ0FBQTtJQUVGOzs7Ozs7O09BT0c7SUFDSCxHQUFHLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFO1FBQ3RCLDJEQUEyRDtRQUMzRCxnQkFBZ0IsRUFBRSxDQUFDLEdBQUcsSUFBSSxHQUFHLElBQUk7UUFDakMscUJBQXFCO1FBQ3JCLGNBQWMsRUFBRSxJQUFJO0tBQ3ZCLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDO0FBRUgsR0FBRyxDQUFDLFNBQVMsQ0FBQyx3QkFBd0IsRUFBRSxNQUFNLEVBQUU7SUFDNUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFDckI7UUFDSSxTQUFTLEVBQUUsYUFBSyxDQUFDLFVBQVUsQ0FBQyxlQUFlO1FBQzNDLFdBQVcsRUFBRSxJQUFJO0tBQ3BCLENBQUMsQ0FBQztBQUNYLENBQUMsQ0FBQyxDQUFDO0FBR0gsU0FBUyxZQUFZLENBQUMsR0FBVSxFQUFFLEdBQVEsRUFBRSxJQUFTLEVBQy9CLE9BQWlDLEVBQUUsRUFBbUI7SUFDeEUsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFJLGFBQUssQ0FBQyxHQUFHLENBQUMsUUFBUyxzQkFBdUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUUsV0FBWSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBRTs4Q0FDdEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUU7b0JBQzNELEdBQUcsQ0FBQyxLQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQy9CLElBQUksQ0FBQyxJQUFJLEVBQUU7UUFDUCxJQUFJLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUM7S0FDekI7SUFDRCxFQUFFLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ2xCLENBQUM7QUFFRCxTQUFnQixrQkFBa0IsQ0FBQyxHQUFVLEVBQUUsR0FBUSxFQUFFLElBQVMsRUFDL0IsT0FBaUMsRUFBRSxFQUFtQjtJQUNyRixPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUksYUFBSyxDQUFDLEdBQUcsQ0FBQyxRQUFTLDJCQUE0QixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBRSxXQUFZLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFFOzhDQUMzRSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBRTtvQkFDM0QsR0FBRyxDQUFDLEtBQU0sRUFBRSxDQUFDLENBQUM7SUFHL0IsSUFBSSxFQUFFLEVBQUU7UUFDSixFQUFFLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0tBQ3hDO0FBQ0wsQ0FBQztBQVZELGdEQVVDO0FBRUQsZ0JBQWdCO0FBQ2hCLEdBQUcsQ0FBQyxTQUFTLENBQUMsd0JBQXdCLEVBQUU7SUFDcEMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLDZCQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtJQUNoQyxHQUFHLENBQUMsR0FBRyxDQUFDLGdCQUFRLENBQUMsYUFBYSxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQzlDLEdBQUcsQ0FBQyxHQUFHLENBQUMsZ0JBQVEsQ0FBQyxvQkFBb0IsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0lBQzNELEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFVLEVBQUUsV0FBd0IsRUFBRSxHQUFRLEVBQUUsT0FBaUMsRUFBRSxJQUFTLEVBQUUsRUFBbUIsRUFBRSxFQUFFO1FBQ2xJLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUE7SUFDdkQsQ0FBQyxDQUFDLENBQUE7SUFFRixHQUFHLENBQUMsWUFBWSxDQUFDLENBQUMsV0FBd0IsRUFBRSxHQUFRLEVBQUUsT0FBaUMsRUFBRSxFQUFtQixFQUFFLEVBQUU7UUFDNUcsSUFBSSxHQUFHLENBQUMsSUFBSSxLQUFLLElBQUksRUFBRTtZQUNuQixFQUFFLENBQUMsSUFBSSxLQUFLLENBQUMsbURBQW9ELE9BQU8sQ0FBQyxHQUFJLElBQUssSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztZQUMxSCxPQUFPO1NBQ1Y7UUFDRCxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDYixDQUFDLENBQUMsQ0FBQTtJQUVGLG1CQUFtQjtJQUNuQixHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFbEMsb0JBQW9CO0lBQ3BCLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxhQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFFeEMsY0FBYztJQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFO1FBQ25CLGNBQWMsRUFBRSx3QkFBZ0I7S0FLbkMsQ0FBQyxDQUFDO0lBQ0gsR0FBRyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUU7UUFDcEIsZUFBZSxFQUFFLHlCQUFpQjtLQUdyQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQztBQUVILEdBQUcsQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFO0lBQ3pCLG9DQUFvQztJQUNwQyxHQUFHLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQ2hDLENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBSSxHQUFHLENBQUMsUUFBUSxFQUFFLEVBQUU7SUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN6Qiw2RUFBNkU7Q0FDaEY7S0FDRztJQUNBLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7Q0FDaEM7QUFFRCxZQUFZO0FBQ1osR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDIn0=