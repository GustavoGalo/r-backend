export type HttpClientOptions = {
  headers?: Record<string, string>
  body?: Record<string, unknown>
  params?: Record<string, string>
  proxy?: HttpClientProxy
  timeout?: number
}

export type HttpClientProxy = {
  host: string
  port: number
  auth?: {
    username: string
    password: string
  }
  protocol?: string
}

export type HttpClient = {
  get<T>(url: string, options?: HttpClientOptions): Promise<T>
  post<T>(url: string, data: Record<string, unknown>, options?: HttpClientOptions): Promise<T>
  put<T>(url: string, data: Record<string, unknown>, options?: HttpClientOptions): Promise<T>
  delete<T>(url: string, options?: HttpClientOptions): Promise<T>
  patch<T>(url: string, data: Record<string, unknown>, options?: HttpClientOptions): Promise<T>
}