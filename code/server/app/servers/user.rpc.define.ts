
// 这种

// UserRpc的命名空间自动合并
import { FrontendSession, RemoterClass } from 'pinus';
import { ChatRemote } from './chat/remote/chatRemote';
import { HallRemote } from './hall/remote/hallRemote';
import { CacheRemote } from './cache/remote/cacheRemote';

declare global {
    interface UserRpc {
        chat: {
            chatRemote: RemoterClass<FrontendSession, ChatRemote>;
        };
        hall: {
            hallRemote: RemoterClass<FrontendSession, HallRemote>;
        };
        cache: {
            cacheRemote: RemoterClass<FrontendSession, CacheRemote>;
        };
    }
}