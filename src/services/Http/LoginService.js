import { BaseService } from "../../utils/classes/BaseHttp"

export class LoginService extends BaseService {
    constructor() {
        super('')
    }
    async login(body){
        return await this.http.post("/api/score/auth/login",body)
    }
}