export enum LogLayer {
  CONTROLLER = 'CONTROLLER',
  SERVICE = 'SERVICE',
  REPOSITORY = 'REPOSITORY',
  VALIDATION = 'VALIDATION',
  MAPPER = 'MAPPER',
  MIDDLEWARE = 'MIDDLEWARE',
  LAMBDA = 'LAMBDA',
  UTIL = 'UTIL',
}

export interface IValidator<T = unknown, R = void> {
  validate(request: T): R
}
