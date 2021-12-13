import { HttpService } from "./HttpHelper";

export class BaseService {

    http

    constructor(url_prefix = "") {
        this.http = (new HttpService(url_prefix))
    }

    async getAll() {
        return await this.http.get(``)
    }

    async get(id) {
        return await this.http.get(`/${id}`)
    }

    async create(body) {
        return await this.http.post(``, body)
    }

    async update(id, body) {
        return await this.http.put(`/${id}`, body)
    }

    async delete(id) {
        return await this.http.remove(`/${id}`)
    }
}