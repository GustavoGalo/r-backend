import { HttpRequest } from "@infrastructure/protocols/http"
import { HttpResponse } from "@infrastructure/protocols/http"

export type HttpMiddleware = (request: HttpRequest, responde: HttpResponse) => void | Promise<void>