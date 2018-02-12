import { HttpError, ErrorData } from './HttpError';

export type ValidationErrorItem = string[];

export type ValidationErrorItems = {
  [property: string]: ValidationErrorItem,
};

export interface ValidationErrorData extends ErrorData {
  validationErrors: ValidationErrorItems;
}

export class ValidationError extends HttpError {
  protected readonly validationErrors: ValidationErrorItems;

  constructor(validationErrors: ValidationErrorItems) {
    super();
    this.validationErrors = validationErrors;
  }

  public get code(): number {
    return 422;
  }

  protected get errorCode(): string {
    return 'Validation';
  }

  public get data(): ValidationErrorData {
    return {
      ...super.data,
      validationErrors: this.validationErrors,
    };
  }

  public toString() {
    return 'Validation error: ' + JSON.stringify(this.validationErrors);
  }

}
