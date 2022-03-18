import { Spls } from '../utils/global'
import { Model } from '../../framework/base/Model'
import { ProtocolMap } from "../const/ProtocolRoute"
import { EnterResData } from "../const/ProtocolData"

export class Account extends Model {
    initialize() {
        super.initialize();
        this.registerEvent(ProtocolMap.enter, this.LoginCallback.bind(this));
    }

    LoginCallback(data: EnterResData) {
        if(data.code === 500) {
            // showError(LOGIN_ERROR);
            return;
        }
        let users : string[] = data.users;
        if(users) {
            users.forEach(element => {
                Spls.log.Info("username : " + element)
            });
        }
    }
}