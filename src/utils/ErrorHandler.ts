export interface ErrorHandlerType {
  status: string;
  message: string;
}

export default class ErrorHandler extends Error {
  status = 500;

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
    Object.setPrototypeOf(this, ErrorHandler.prototype);
  }
}
