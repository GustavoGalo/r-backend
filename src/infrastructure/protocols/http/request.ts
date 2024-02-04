export type HttpRequest<
  HttpBodyRequest = unknown,
  HttpParamsRequest = unknown,
  HttpQueryRequest = unknown,
  HttpFileRequest = unknown,
  HttpHeadersRequest = unknown
> = {
  ip: string
  body: HttpBodyRequest
  params: HttpParamsRequest
  query: HttpQueryRequest
  file?: HttpFileRequest
  headers: HttpHeadersRequest
  locale: string
}
