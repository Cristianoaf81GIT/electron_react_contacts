import axios,{ AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export class ApiService {

  private instance: AxiosInstance;
  private config: AxiosRequestConfig;

  constructor() {
    this.config = {
      baseURL: 'http://localhost:9000/api/v1/',     
    };
    this.instance = axios.create(this.config);
  }

  async get(url: string, params?: any): Promise<AxiosResponse<any, any>> {
    return this.instance.get(url, params);
  }

  async post(url: string, params?: any): Promise<AxiosResponse<any, any>> {
    return this.instance.post(url, params);
  }

  async put(url: string, params?: any): Promise<AxiosResponse<any, any>> {
    return this.instance.put(url, params);
  }

  async delete(url: string, params?: any): Promise<AxiosResponse<any, any>> {
    return this.instance.delete(url, params);
  }

  getAxiosInstance(): AxiosInstance {
    return this.instance;
  }
}

export const apiService = new ApiService();
