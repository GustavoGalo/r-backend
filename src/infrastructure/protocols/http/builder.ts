import { Logger } from "@infrastructure/logger"
import {
  HttpMiddleware,
  HttpServer,
  HttpServerFactoryOptions,
  HttpServerType,
  HttpServerFactory,
} from "@infrastructure/protocols/http"

export class HttpServerBuilder {
  private type?: HttpServerType
  private middlewares?: HttpMiddleware[]
  private logger?: Logger

  public setType(type: HttpServerType): HttpServerBuilder {
    this.type = type
    return this
  }

  public setMiddlewares(middlewares: HttpMiddleware[]): HttpServerBuilder {
    this.middlewares = middlewares
    return this
  }

  public setLogger(logger: Logger): HttpServerBuilder {
    this.logger = logger
    return this
  }

  public async build(): Promise<HttpServer> {
    if (!this.logger) throw new Error("Logger is required to create a http server.")
    if (!this.type) throw new Error("Type is required to create a http server.")

    const options: HttpServerFactoryOptions = {
      type: this.type,
      middlewares: this.middlewares,
      logger: this.logger,
    }

    return await HttpServerFactory.create(options)
  }
}
