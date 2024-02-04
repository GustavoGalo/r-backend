export type HttpResponse = {
  exposeInternalErrorMessage: boolean
  convertDataToCsvResponse: boolean
  fileResponse: boolean
  status: (statusCode: number) => HttpResponse
  json: (data: object) => HttpResponse
  file: (writeStream: NodeJS.ReadWriteStream, filepath: string) => HttpResponse
  send: (data: object) => HttpResponse
  setHeader: (key: string, value: string) => HttpResponse
  csv: (data: string) => HttpResponse
  locale: string
}
