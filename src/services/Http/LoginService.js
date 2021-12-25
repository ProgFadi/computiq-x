import { BASE_URL } from "../../common/Constants"
import { BaseService } from "../../utils/classes/BaseHttp"

export class LoginService extends BaseService {
    constructor() {
        super('')
    }
    async login(body){
        return  await this.http.post(BASE_URL+"/api/score/auth/login",body)
    }
}