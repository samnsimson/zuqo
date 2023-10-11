import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

interface HttpRequestProps {
    token: string
}

class HttpRequest {
    protected axios: AxiosInstance

    constructor(protected token: string) {
        this.axios = axios.create({ baseURL: 'https://demo.zuqodemo.world:4343', headers: { Authorization: token } })
    }

    static init = ({ token }: HttpRequestProps) => {
        return new HttpRequest(token)
    }

    public get = async (url: string, headers: AxiosRequestConfig = {}) => {
        try {
            const { data } = await this.axios.get(url, headers)
            return data
        } catch (error: any) {
            throw new Error(error)
        }
    }
    public put = async (url: string, payload: any = {}, headers: AxiosRequestConfig = {}) => {
        try {
            const { data } = await this.axios.put(url, payload, headers)
            return data
        } catch (error: any) {
            throw new Error(error)
        }
    }
    public post = async (url: string, payload: any = {}, headers: AxiosRequestConfig = {}) => {
        try {
            const { data } = await this.axios.post(url, payload, headers)
            return data
        } catch (error: any) {
            throw new Error(error)
        }
    }
    public delete = async (url: string, headers: AxiosRequestConfig = {}) => {
        try {
            const { data } = await this.axios.delete(url, headers)
            return data
        } catch (error: any) {
            throw new Error(error)
        }
    }
}

export const httpRequest = HttpRequest.init({ token: '' })
