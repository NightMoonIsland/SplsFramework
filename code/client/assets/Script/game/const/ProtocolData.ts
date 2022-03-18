
//
// 前后端通用配置 后期将通过工具导出
//

//协议数据结构
export class QueryData {
    uid : string;
}

export class EnterReqData {
    rid: string;
    username: string;
}

export class EnterResData {
    code: number;
    users: string[];
}