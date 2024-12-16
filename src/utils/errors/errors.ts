export class FabulaError extends Error {
  statusCode: number;
  errorCode: string;

  constructor(message: string, statusCode: number, errorCode: string) {
    super(message);
    this.statusCode = statusCode;
    this.errorCode = errorCode;
  }
}

export class FabulaServerErrorBuilder {
  static Unauthorized(message: string) {
    return new FabulaError(message, 401, "UNAUTHORIZED");
  }
}
