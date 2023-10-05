import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

interface HttpRequestProps {
    token: string
}

class HttpRequest {
    protected axios: AxiosInstance

    constructor(protected token: string) {
        this.axios = axios.create({ baseURL: '', headers: { Authorization: token } })
    }

    static init = ({ token }: HttpRequestProps) => {
        return new HttpRequest(token)
    }

    public get = async (url: string, headers: AxiosRequestConfig = {}) => {
        return await this.axios.get(url, headers)
    }
    public put = async (url: string, data: any = {}, headers: AxiosRequestConfig = {}) => {
        return await this.axios.put(url, data, headers)
    }
    public post = async (url: string, data: any = {}, headers: AxiosRequestConfig = {}) => {
        return await this.axios.post(url, data, headers)
    }
    public delete = async (url: string, headers: AxiosRequestConfig = {}) => {
        return await this.axios.delete(url, headers)
    }
}

export const httpRequest = HttpRequest.init({ token: '' })
