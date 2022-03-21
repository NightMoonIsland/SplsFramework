import { Application, ChannelService, FrontendSession, RemoterClass } from 'pinus';

export default function (app: Application) {
    return new CacheRemote(app);
}

// rpc 定义挪到单独的定义文件(user.rpc.define.ts)。解决ts-node 有可能找不到定义的问题。
// 你也可以用其它方法解决，或者没有遇到过这个问题的话，定义还是可以放在这里。

// UserRpc的命名空间自动合并
// declare global {
//     interface UserRpc {
//         chat: {
//             chatRemote: RemoterClass<FrontendSession, CacheRemote>;
//         };
//     }
// }
export class CacheRemote {

    constructor(private app: Application) {
        this.app = app;
        this.channelService = app.get('channelService');
    }

    private channelService: ChannelService;

    public add(a: number, b : number) {
        return a + b;
    }
}