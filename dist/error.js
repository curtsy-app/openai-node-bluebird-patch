"use strict";
// File generated from our OpenAPI spec by Stainless.
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalServerError = exports.RateLimitError = exports.UnprocessableEntityError = exports.ConflictError = exports.NotFoundError = exports.PermissionDeniedError = exports.AuthenticationError = exports.BadRequestError = exports.APIConnectionTimeoutError = exports.APIConnectionError = exports.APIUserAbortError = exports.APIError = void 0;
const core_1 = require("./core.js");
class APIError extends Error {
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
            return new APIConnectionError({ cause: (0, core_1.castToError)(errorResponse) });
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
exports.APIError = APIError;
class APIUserAbortError extends APIError {
    constructor({ message } = {}) {
        super(undefined, undefined, message || 'Request was aborted.', undefined);
        this.status = undefined;
    }
}
exports.APIUserAbortError = APIUserAbortError;
class APIConnectionError extends APIError {
    constructor({ message, cause }) {
        super(undefined, undefined, message || 'Connection error.', undefined);
        this.status = undefined;
        // in some environments the 'cause' property is already declared
        // @ts-ignore
        if (cause)
            this.cause = cause;
    }
}
exports.APIConnectionError = APIConnectionError;
class APIConnectionTimeoutError extends APIConnectionError {
    constructor({ message } = {}) {
        super({ message: message !== null && message !== void 0 ? message : 'Request timed out.' });
    }
}
exports.APIConnectionTimeoutError = APIConnectionTimeoutError;
class BadRequestError extends APIError {
    constructor() {
        super(...arguments);
        this.status = 400;
    }
}
exports.BadRequestError = BadRequestError;
class AuthenticationError extends APIError {
    constructor() {
        super(...arguments);
        this.status = 401;
    }
}
exports.AuthenticationError = AuthenticationError;
class PermissionDeniedError extends APIError {
    constructor() {
        super(...arguments);
        this.status = 403;
    }
}
exports.PermissionDeniedError = PermissionDeniedError;
class NotFoundError extends APIError {
    constructor() {
        super(...arguments);
        this.status = 404;
    }
}
exports.NotFoundError = NotFoundError;
class ConflictError extends APIError {
    constructor() {
        super(...arguments);
        this.status = 409;
    }
}
exports.ConflictError = ConflictError;
class UnprocessableEntityError extends APIError {
    constructor() {
        super(...arguments);
        this.status = 422;
    }
}
exports.UnprocessableEntityError = UnprocessableEntityError;
class RateLimitError extends APIError {
    constructor() {
        super(...arguments);
        this.status = 429;
    }
}
exports.RateLimitError = RateLimitError;
class InternalServerError extends APIError {
}
exports.InternalServerError = InternalServerError;
//# sourceMappingURL=error.js.map