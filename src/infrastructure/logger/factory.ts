import {
  Logger,
  LoggerMetadata,
  LoggerLevel,
  LoggerTransport,
  PinoAdapter,
  WinstonAdapter,
} from "@infrastructure/logger"

export const enum LoggerAdapterType {
  PINO = "pino",
  WINSTON = "winston",
}

export type LoggerFactoryOptions = {
  level: LoggerLevel
  transports: LoggerTransport[]
  type: LoggerAdapterType
  format?: string
  metadata?: LoggerMetadata
}

export class LoggerFactory {
  public static create(options: LoggerFactoryOptions): Logger {
    const instancesTypes = {
      [LoggerAdapterType.PINO]: PinoAdapter,
      [LoggerAdapterType.WINSTON]: WinstonAdapter,
    }

    const instance: Logger = new instancesTypes[options.type || LoggerAdapterType.WINSTON]()

    if (options.level) {
      instance.setLevel(options.level)
    }

    if (options.format) {
      instance.setFormat(options.format)
    }

    if (options.transports) {
      instance.setTransports(options.transports)
    }

    return instance
  }
}