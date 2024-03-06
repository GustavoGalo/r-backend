export type LoggerMetadata = Record<string, string | number | Date>

export const enum LoggerLevel {
  ERROR = "error",
  WARN = "warn",
  INFO = "info",
  DEBUG = "debug",
}

export type LoggerTransport = {
  type: LoggerTransportType
  filename?: string
}

export const enum LoggerTransportType {
  CONSOLE = "console",
  FILE = "file",
}

export abstract class Logger {
  level: LoggerLevel
  transports: LoggerTransport[]
  format?: string
  metadata?: LoggerMetadata
  public abstract log(message: unknown, ...optionalParams: unknown[]): void
  public abstract warn(message: unknown, ...optionalParams: unknown[]): void
  public abstract error(message: unknown, ...optionalParams: unknown[]): void
  public abstract debug(message: unknown, ...optionalParams: unknown[]): void
  public abstract info(message: unknown, ...optionalParams: unknown[]): void
  public abstract setLevel(level: string): Logger
  public abstract setTransports(transports: LoggerTransport[]): Logger
  public abstract setFormat(format: string): Logger

  constructor(metadata?: LoggerMetadata) {
    this.metadata = metadata
    this.level = {} as LoggerLevel
    this.transports = []
    this.format = "{level} {message}"
  }
}