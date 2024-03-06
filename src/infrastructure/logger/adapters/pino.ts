import { Logger, LoggerTransport } from "@infrastructure/logger"
import pino from "pino"

export class PinoAdapter extends Logger {
  private logger = pino()

  log(message: unknown, ...optionalParams: unknown[]) {
    this.logger.info(message as string, ...optionalParams)
  }

  warn(message: unknown, ...optionalParams: unknown[]) {
    this.logger.warn(message as string, ...optionalParams)
  }

  error(message: unknown, ...optionalParams: unknown[]) {
    this.logger.error(message as string, ...optionalParams)
  }

  debug(message: unknown, ...optionalParams: unknown[]) {
    this.logger.debug(message as string, ...optionalParams)
  }

  info(message: unknown, ...optionalParams: unknown[]): void {
    this.logger.info(message as string, ...optionalParams)
  }

  setLevel(level: string): Logger {
    this.logger.level = level
    return this
  }

  setTransports(transports: LoggerTransport[]): Logger {
    console.log(transports)
    return this
  }

  setFormat(format: string): Logger {
    console.log(format)
    return this
  }
}
