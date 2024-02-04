import { HttpResponse } from "@infrastructure/protocols/http"
import { Response } from "express"

export class ExpressResponse implements HttpResponse {
  public readonly response: Response
  public convertDataToCsvResponse: boolean
  public exposeInternalErrorMessage: boolean
  public fileResponse: boolean
  public locale: string

  constructor(response: Response, exposeInternalErrorMessage = false, locale = "pt") {
    this.response = response
    this.convertDataToCsvResponse = false
    this.fileResponse = false
    this.exposeInternalErrorMessage = exposeInternalErrorMessage
    this.locale = locale
  }

  status(statusCode: number): HttpResponse {
    this.response.status(statusCode)
    return this
  }

  json(data: object): HttpResponse {
    this.response.json(data)
    return this
  }

  file(writeStream: NodeJS.ReadWriteStream, filepath: string): HttpResponse {
    this.response.setHeader("Content-Type", "application/octet-stream")
    this.response.setHeader("Content-Disposition", `attachment; filename=${filepath}`)
    writeStream.pipe(this.response)
    return this
  }

  send(data: object): HttpResponse {
    this.response.send(data)
    return this
  }

  setHeader(key: string, value: string): HttpResponse {
    this.response.setHeader(key, value)
    return this
  }

  csv(data: string): HttpResponse {
    this.response.setHeader("Content-Type", "text/csv")
    this.response.setHeader("Content-Disposition", "attachment; filename=export.csv")
    this.response.send(data)
    return this
  }
}
