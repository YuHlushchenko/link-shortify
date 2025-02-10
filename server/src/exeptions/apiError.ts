export default class ApiError extends Error {
  status: number
  errors: any[]

  constructor(status: number, message: string, errors: any[] = []) {
    super(message)
    this.status = status
    this.errors = errors
  }

  static UnauthorizedError() {
    return new ApiError(401, 'User is not authorized')
  }

  static BadRequest(message: string, errors: any[] = []) {
    return new ApiError(400, message, errors)
  }

  static Internal(message: string) {
    return new ApiError(500, message)
  }

  static Forbidden(message: string) {
    return new ApiError(403, message)
  }

  static NotFound(message: string) {
    return new ApiError(404, message)
  }

  static Conflict(message: string) {
    return new ApiError(409, message)
  }
}
