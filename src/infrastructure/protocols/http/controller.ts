import { HttpRequest, HttpResponse } from "@infrastructure/protocols/http"

export const enum HttpMethod {
  GET = "get",
  POST = "post",
  PUT = "put",
  DELETE = "delete",
}

export type ControllerRoute = {
  method: HttpMethod
  path?: string
  propertyKey: string
}

export type ControllerMethod = (req: HttpRequest, res: HttpResponse) => void

export type ControllerInterface = {
  routes: ControllerRoute[]
  basePath: string
  method?: ControllerMethod
}

export abstract class Controller implements ControllerInterface {
  public routes: ControllerRoute[]
  public basePath: string

  constructor() {
    this.routes = []
    this.basePath = ""
  }
}