import axios from '../axios'


export class HttpService {

    headers = {
        
    }

    constructor(url_prefix = "") {
        this.url_prefix = url_prefix
        this.getHeaders()
    }

    async get(url, queryParams) {
        try {
            let response = await axios.get(this.getUrl(url) + this.mapQueryParams(queryParams), {
                headers: this.headers
            })
            
            return response
        } catch (error) {
            console.log(error)
            return error
        }
    }

    async post(url, body, queryParams = null) {
        try {
            let response = await axios.post(this.getUrl(url) + this.mapQueryParams(queryParams),body ,{
                method: "POST",
                headers: this.headers
            })
            
            return response
        } catch (error) {
            // console.log('error in response of axios is',error)
            // let res = handleResponse(error)
            return error; // null or object of msg
        }

    }

    async put(url, body, queryParams = null) {
        try {
            let response = await fetch(this.getUrl(url) + this.mapQueryParams(queryParams), {
                method: "PUT",
                headers: this.headers,
                body: JSON.stringify(body)
            })
           
            return response
        } catch (error) {
            console.log(error);
            return null
        }
    }

    async remove(url, queryParams = null) {
        try {
            let response = await fetch(this.getUrl(url) + this.mapQueryParams(queryParams), {
                method: "DELETE",
                headers: this.headers
            })
           
            return response
        } catch (error) {
            console.log(error)
            return null
        }
    }

    getUrl(url) {
        return this.url_prefix + url
    }

    getHeaders() {
        this.headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    }

    mapQueryParams(queryParams) {
        return queryParams
            ? Object.keys(queryParams).map(function (key) {
                return key + '=' + queryParams[key]
            }).join('&')
            : ""
    }
}