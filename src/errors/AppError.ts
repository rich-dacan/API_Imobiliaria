export class AppError extends Error {

  statuscode: number

  constructor(message: string, statusCode: number = 400) {
    super()
    this.message = message;
    this.statuscode = statusCode;
  }
};