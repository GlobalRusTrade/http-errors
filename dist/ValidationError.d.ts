import { HttpError, ErrorData } from './HttpError';
export declare type ValidationErrorItem = string[];
export declare type ValidationErrorItems = {
    [property: string]: ValidationErrorItem;
};
export interface ValidationErrorData extends ErrorData {
    validationErrors: ValidationErrorItems;
}
export declare class ValidationError extends HttpError {
    protected readonly validationErrors: ValidationErrorItems;
    constructor(validationErrors: ValidationErrorItems);
    readonly code: number;
    protected readonly errorCode: string;
    readonly data: ValidationErrorData;
    toString(): string;
}
