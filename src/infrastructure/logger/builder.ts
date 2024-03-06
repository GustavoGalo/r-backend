import {
  LoggerMetadata,
  LoggerAdapterType,
  LoggerLevel,
  LoggerTransport,
  Logger,
  LoggerFactory,
  LoggerFactoryOptions,
} from "@infrastructure/logger"

export class LoggerBuilder {
  private type?: LoggerAdapterType
  private level?: LoggerLevel
  private transports?: LoggerTransport[]
  private format?: string
  private metadata?: LoggerMetadata

  public setType(type: LoggerAdapterType): LoggerBuilder {
    this.type = type
    return this
  }

  public setLevel(level: LoggerLevel): LoggerBuilder {
    this.level = level
    return this
  }

  public setTransports(transports: LoggerTransport[]): LoggerBuilder {
    this.transports = transports
    return this
  }

  public setFormat(format: string): LoggerBuilder {
    this.format = format
    return this
  }

  public setMetadata(metadata: LoggerMetadata): LoggerBuilder {
    this.metadata = metadata
    return this
  }

  public build(): Logger {
    if (!this.type) {
      throw new Error("Logger type is required")
    }

    if (!this.level) {
      throw new Error("Logger level is required")
    }

    if (!this.transports) {
      throw new Error("Logger transports is required")
    }

    const options: LoggerFactoryOptions = {
      level: this.level,
      format: this.format,
      transports: this.transports,
      type: this.type,
      metadata: this.metadata,
    }

    return LoggerFactory.create(options)
  }
}
