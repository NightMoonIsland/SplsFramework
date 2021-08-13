"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(app) {
    return new ChatRemote(app);
}
exports.default = default_1;
// rpc 定义挪到单独的定义文件(user.rpc.define.ts)。解决ts-node 有可能找不到定义的问题。
// 你也可以用其它方法解决，或者没有遇到过这个问题的话，定义还是可以放在这里。
// UserRpc的命名空间自动合并
// declare global {
//     interface UserRpc {
//         chat: {
//             chatRemote: RemoterClass<FrontendSession, ChatRemote>;
//         };
//     }
// }
class ChatRemote {
    constructor(app) {
        this.app = app;
        this.app = app;
        this.channelService = app.get('channelService');
    }
    /**
     * Add user into chat channel.
     *
     * @param {String} uid unique id for user
     * @param {String} sid server id
     * @param {String} name channel name
     * @param {boolean} flag channel parameter
     *
     */
    async add(uid, sid, name, flag) {
        let channel = this.channelService.getChannel(name, flag);
        let username = uid.split('*')[0];
        let param = {
            user: username
        };
        channel.pushMessage('onAdd', param);
        if (!!channel) {
            channel.add(uid, sid);
        }
        return this.get(name, flag);
    }
    /**
     * Get user from chat channel.
     *
     * @param {Object} opts parameters for request
     * @param {String} name channel name
     * @param {boolean} flag channel parameter
     * @return {Array} users uids in channel
     *
     */
    get(name, flag) {
        let users = [];
        let channel = this.channelService.getChannel(name, flag);
        if (!!channel) {
            users = channel.getMembers();
        }
        for (let i = 0; i < users.length; i++) {
            users[i] = users[i].split('*')[0];
        }
        return users;
    }
    /**
     * Kick user out chat channel.
     *
     * @param {String} uid unique id for user
     * @param {String} sid server id
     * @param {String} name channel name
     *
     */
    async kick(uid, sid, name) {
        let channel = this.channelService.getChannel(name, false);
        // leave channel
        if (!!channel) {
            channel.leave(uid, sid);
        }
        let username = uid.split('*')[0];
        let param = {
            user: username
        };
        channel.pushMessage('onLeave', param);
    }
}
exports.ChatRemote = ChatRemote;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdFJlbW90ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FwcC9zZXJ2ZXJzL2NoYXQvcmVtb3RlL2NoYXRSZW1vdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxtQkFBeUIsR0FBZ0I7SUFDckMsT0FBTyxJQUFJLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUMvQixDQUFDO0FBRkQsNEJBRUM7QUFFRCw2REFBNkQ7QUFDN0Qsd0NBQXdDO0FBRXhDLG1CQUFtQjtBQUNuQixtQkFBbUI7QUFDbkIsMEJBQTBCO0FBQzFCLGtCQUFrQjtBQUNsQixxRUFBcUU7QUFDckUsYUFBYTtBQUNiLFFBQVE7QUFDUixJQUFJO0FBQ0osTUFBYSxVQUFVO0lBRW5CLFlBQW9CLEdBQWdCO1FBQWhCLFFBQUcsR0FBSCxHQUFHLENBQWE7UUFDaEMsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZixJQUFJLENBQUMsY0FBYyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBSUQ7Ozs7Ozs7O09BUUc7SUFDSSxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQVcsRUFBRSxHQUFXLEVBQUUsSUFBWSxFQUFFLElBQWE7UUFDbEUsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3pELElBQUksUUFBUSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakMsSUFBSSxLQUFLLEdBQUc7WUFDUixJQUFJLEVBQUUsUUFBUTtTQUNqQixDQUFDO1FBQ0YsT0FBTyxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFcEMsSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFO1lBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDekI7UUFFRCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNLLEdBQUcsQ0FBQyxJQUFZLEVBQUUsSUFBYTtRQUNuQyxJQUFJLEtBQUssR0FBYSxFQUFFLENBQUM7UUFDekIsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxDQUFDLE9BQU8sRUFBRTtZQUNYLEtBQUssR0FBRyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDaEM7UUFDRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNuQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNyQztRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0ksS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFXLEVBQUUsR0FBVyxFQUFFLElBQVk7UUFDcEQsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzFELGdCQUFnQjtRQUNoQixJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUU7WUFDWCxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUMzQjtRQUNELElBQUksUUFBUSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakMsSUFBSSxLQUFLLEdBQUc7WUFDUixJQUFJLEVBQUUsUUFBUTtTQUNqQixDQUFDO1FBQ0YsT0FBTyxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDMUMsQ0FBQztDQUNKO0FBMUVELGdDQTBFQyJ9