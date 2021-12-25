import { BaseService } from "../../utils/classes/BaseHttp"

class DashboradService extends BaseService {
    constructor() {
        super('')
    }
    async loadPoints(){
        return  await this.http.get("api/score/data/5")
    }
}

export default DashboradService;