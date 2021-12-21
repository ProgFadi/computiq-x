import { BaseService } from "../../utils/classes/BaseHttp"

export class DashboardService extends BaseService {
    constructor() {
        super('')
    }
    async loadPoints(){
        return  await this.http.get("api/score/data/5")
    }
}