import {
  ExpressHttpServerAdapter,
  HttpMiddleware,
} from "@infrastructure/protocols/http"

import { Logger } from "@infrastructure/logger"

export type HttpServer = {
  logger: Logger
  close: () => Promise<void> | void
  listen: (port: number) => Promise<void> | void
  setup?: () => Promise<HttpServer> | HttpServer
  registerMiddlewares: (middlewares: HttpMiddleware[]) => HttpServer
}

export const enum HttpServerType {
  EXPRESS = "express",
  FASTIFY = "fastify",
}

export type HttpServerFactoryOptions = {
  type: HttpServerType
  logger: Logger
  middlewares?: HttpMiddleware[]
}

export class HttpServerFactory {
  public static async create(options: HttpServerFactoryOptions): Promise<HttpServer> {

    const instance: HttpServer = new ExpressHttpServerAdapter(
      options.logger,
    )

    if (options.middlewares) {
      instance.registerMiddlewares(options.middlewares)
    }

    if (!instance.setup) return instance

    await instance.setup()

    return instance
  }
}