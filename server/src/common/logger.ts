import pino from "pino";
import { LogLayer } from "./types";

const baseLogger = pino({
  level: process.env.LOG_LEVEL || "info",
  formatters: {
    level: (label) => ({ level: label }),
  },
});

export const logger = baseLogger;

export interface LogData {
  text: string;
  [key: string]: unknown;
}

export function createContextLogger(
  correlationId: string,
  layer: LogLayer,
): pino.Logger {
  return baseLogger.child({ correlationId, layer });
}

export function createLayerLogger(layer: LogLayer): pino.Logger {
  return baseLogger.child({ layer });
}
