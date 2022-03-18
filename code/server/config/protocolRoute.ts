
//
// 前后端通用配置 后期将通过工具导出
//

//提供给前端用 有好方法即替代
export const ProtocolArray = [
    "gate.gateHandler.queryEntry",
    "connector.entryHandler.enter",
    "onAdd",
    "onLeave"
]

//协议路由
export let ProtocolMap = {
    query : ProtocolArray[0],
    enter : ProtocolArray[1],

    onAdd : ProtocolArray[2],
    onKick : ProtocolArray[3]
}
