import * as winston from "winston"
import { format as formatDate } from "date-fns"
import { Logger, LoggerTransport, LoggerTransportType } from "@infrastructure/logger"

export class WinstonAdapter extends Logger {
  private logger = winston.createLogger({
    format: winston.format.combine(winston.format.errors({ stack: true })),
    transports: [],
  })

  log(message: unknown, ...optionalParams: unknown[]) {
    this.logger.info(message as string, ...optionalParams)
  }

  warn(message: unknown, ...optionalParams: unknown[]) {
    this.logger.warn(message as string, ...optionalParams)
  }

  error(message: unknown, ...optionalParams: unknown[]) {
    this.logger.error(message as string, ...optionalParams)
  }

  info(message: unknown, ...optionalParams: unknown[]): void {
    this.logger.info(message as string, ...optionalParams)
  }

  debug(message: unknown, ...optionalParams: unknown[]): void {
    this.logger.debug(message as string, ...optionalParams)
  }

  exception(message: unknown, ...optionalParams: unknown[]): void {
    this.logger.error(message as string, ...optionalParams)
  }

  setLevel(level: string): Logger {
    this.logger.level = level
    return this
  }

  setTransports(transports: LoggerTransport[]): Logger {
    transports.forEach(transport => {
      switch (transport.type) {
        case LoggerTransportType.CONSOLE:
          this.logger.add(new winston.transports.Console())
          break
        case LoggerTransportType.FILE:
          this.logger.add(new winston.transports.File({ filename: transport.filename }))
          break
      }
    })

    return this
  }

  setFormat(format: string): Logger {
    this.logger.format = winston.format.printf(info => {
      let message = format
      for (const key in this.metadata) {
        message = message.replace(`{${key}}`, this.metadata[key] as string)
      }

      message = message.replace(`{message}`, info.message)
      message = message.replace(`{level}`, info.level.toUpperCase())
      message = message.replace(`{date}`, formatDate(new Date(), "dd/MM/yyyy HH:mm:ss"))

      if (info.stack) {
        message = `${message} ${info.stack}`
      }

      return message
    })

    return this
  }
}