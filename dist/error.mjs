// File generated from our OpenAPI spec by Stainless.
import { castToError } from "./core.mjs";
export class APIError extends Error {
    constructor(status, error, message, headers) {
        super(APIError.makeMessage(error, message));
        this.status = status;
        this.headers = headers;
        const data = error;
        this.error = data;
        this.code = data === null || data === void 0 ? void 0 : data['code'];
        this.param = data === null || data === void 0 ? void 0 : data['param'];
        this.type = data === null || data === void 0 ? void 0 : data['type'];
    }
    static makeMessage(error, message) {
        return ((error === null || error === void 0 ? void 0 : error.message) ?
            typeof error.message === 'string' ? error.message
                : JSON.stringify(error.message)
            : error ? JSON.stringify(error)
                : message || 'Unknown error occurred');
    }
    static generate(status, errorResponse, message, headers) {
        if (!status) {
            return new APIConnectionError({ cause: castToError(errorResponse) });
        }
        const error = errorResponse === null || errorResponse === void 0 ? void 0 : errorResponse['error'];
        if (status === 400) {
            return new BadRequestError(status, error, message, headers);
        }
        if (status === 401) {
            return new AuthenticationError(status, error, message, headers);
        }
        if (status === 403) {
            return new PermissionDeniedError(status, error, message, headers);
        }
        if (status === 404) {
            return new NotFoundError(status, error, message, headers);
        }
        if (status === 409) {
            return new ConflictError(status, error, message, headers);
        }
        if (status === 422) {
            return new UnprocessableEntityError(status, error, message, headers);
        }
        if (status === 429) {
            return new RateLimitError(status, error, message, headers);
        }
        if (status >= 500) {
            return new InternalServerError(status, error, message, headers);
        }
        return new APIError(status, error, message, headers);
    }
}
export class APIUserAbortError extends APIError {
    constructor({ message } = {}) {
        super(undefined, undefined, message || 'Request was aborted.', undefined);
        this.status = undefined;
    }
}
export class APIConnectionError extends APIError {
    constructor({ message, cause }) {
        super(undefined, undefined, message || 'Connection error.', undefined);
        this.status = undefined;
        // in some environments the 'cause' property is already declared
        // @ts-ignore
        if (cause)
            this.cause = cause;
    }
}
export class APIConnectionTimeoutError extends APIConnectionError {
    constructor({ message } = {}) {
        super({ message: message !== null && message !== void 0 ? message : 'Request timed out.' });
    }
}
export class BadRequestError extends APIError {
    constructor() {
        super(...arguments);
        this.status = 400;
    }
}
export class AuthenticationError extends APIError {
    constructor() {
        super(...arguments);
        this.status = 401;
    }
}
export class PermissionDeniedError extends APIError {
    constructor() {
        super(...arguments);
        this.status = 403;
    }
}
export class NotFoundError extends APIError {
    constructor() {
        super(...arguments);
        this.status = 404;
    }
}
export class ConflictError extends APIError {
    constructor() {
        super(...arguments);
        this.status = 409;
    }
}
export class UnprocessableEntityError extends APIError {
    constructor() {
        super(...arguments);
        this.status = 422;
    }
}
export class RateLimitError extends APIError {
    constructor() {
        super(...arguments);
        this.status = 429;
    }
}
export class InternalServerError extends APIError {
}
//# sourceMappingURL=error.mjs.map