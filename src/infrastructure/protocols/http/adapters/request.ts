import { HttpRequest } from "@infrastructure/protocols/http"
import { Request } from "express"

export class ExpressRequest implements HttpRequest {
  constructor(private readonly request: Request) {}

  get ip(): string {
    return this.request.ip as string
  }

  get body(): object {
    return this.request.body
  }

  get params(): object {
    return this.request.params
  }

  get query(): object {
    return this.request.query
  }

  get headers(): object {
    return this.request.headers
  }

  get locale(): string {
    return this.request.headers["accept-language"] as string
  }
}
