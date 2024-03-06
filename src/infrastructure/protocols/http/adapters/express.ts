import express, { Application, Request, Response } from "express"
import { Logger } from "@infrastructure/logger"
import { HttpServer, ExpressRequest, ExpressResponse, HttpMiddleware } from "@infrastructure/protocols/http"
import http from "http"
export class ExpressHttpServerAdapter implements HttpServer {
  private readonly serversListenings: http.Server[]
  public readonly server: Application
  public readonly logger: Logger

  constructor(logger: Logger) {
    this.logger = logger
    this.server = express()
    this.serversListenings = []
  }

  private addServerListening(server: http.Server): void {
    this.serversListenings.push(server)
  }

  public registerMiddlewares(middlewares: HttpMiddleware[]): HttpServer {
    middlewares.forEach((middleware: HttpMiddleware) => {
      this.server.use(async (request: Request, response: Response, next: () => void) => {
        const httpRequest = new ExpressRequest(request)
        const httpResponse = new ExpressResponse(response, true, httpRequest.locale)

        await middleware(httpRequest, httpResponse)

        next()
      })
    })

    return this
  }

  public async close(): Promise<void> {
    for (const server of this.serversListenings) {
      await server.close()
    }
    return
  }

  public async listen(port: number): Promise<void> {
    const httpServer = await this.server.listen(port)
    this.addServerListening(httpServer)
    this.logger.info(`Server running with Express adapter at http://localhost:${port}`)
    return
  }
}
