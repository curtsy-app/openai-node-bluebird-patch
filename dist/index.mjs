// File generated from our OpenAPI spec by Stainless.
var _a;
import * as Core from "./core.mjs";
import * as Pagination from "./pagination.mjs";
import * as API from "./resources/index.mjs";
import * as Errors from "./error.mjs";
import * as Uploads from "./uploads.mjs";
/** API Client for interfacing with the OpenAI API. */
export class OpenAI extends Core.APIClient {
    /**
     * API Client for interfacing with the OpenAI API.
     *
     * @param {string} [opts.apiKey=process.env['OPENAI_API_KEY']] - The API Key to send to the API.
     * @param {string} [opts.baseURL] - Override the default base URL for the API.
     * @param {number} [opts.timeout=10 minutes] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
     * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
     * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
     * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
     * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
     * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
     * @param {boolean} [opts.dangerouslyAllowBrowser=false] - By default, client-side use of this library is not allowed, as it risks exposing your secret API credentials to attackers.
     * @param {string | null} [opts.organization]
     */
    constructor(_b) {
        var _c, _d, _e;
        var { apiKey = Core.readEnv('OPENAI_API_KEY'), organization = (_c = Core.readEnv('OPENAI_ORG_ID')) !== null && _c !== void 0 ? _c : null, ...opts } = _b === void 0 ? {} : _b;
        if (apiKey === undefined) {
            throw new Error("The OPENAI_API_KEY environment variable is missing or empty; either provide it, or instantiate the OpenAI client with an apiKey option, like new OpenAI({ apiKey: 'my apiKey' }).");
        }
        const options = {
            apiKey,
            organization,
            ...opts,
            baseURL: (_d = opts.baseURL) !== null && _d !== void 0 ? _d : `https://api.openai.com/v1`,
        };
        if (!options.dangerouslyAllowBrowser && Core.isRunningInBrowser()) {
            throw new Error("It looks like you're running in a browser-like environment.\n\nThis is disabled by default, as it risks exposing your secret API credentials to attackers.\nIf you understand the risks and have appropriate mitigations in place,\nyou can set the `dangerouslyAllowBrowser` option to `true`, e.g.,\n\nnew OpenAI({ apiKey, dangerouslyAllowBrowser: true });\n\nhttps://help.openai.com/en/articles/5112595-best-practices-for-api-key-safety\n");
        }
        super({
            baseURL: options.baseURL,
            timeout: (_e = options.timeout) !== null && _e !== void 0 ? _e : 600000 /* 10 minutes */,
            httpAgent: options.httpAgent,
            maxRetries: options.maxRetries,
            fetch: options.fetch,
        });
        this.completions = new API.Completions(this);
        this.chat = new API.Chat(this);
        this.edits = new API.Edits(this);
        this.embeddings = new API.Embeddings(this);
        this.files = new API.Files(this);
        this.images = new API.Images(this);
        this.audio = new API.Audio(this);
        this.moderations = new API.Moderations(this);
        this.models = new API.Models(this);
        this.fineTuning = new API.FineTuning(this);
        this.fineTunes = new API.FineTunes(this);
        this._options = options;
        this.apiKey = apiKey;
        this.organization = organization;
    }
    defaultQuery() {
        return this._options.defaultQuery;
    }
    defaultHeaders(opts) {
        return {
            ...super.defaultHeaders(opts),
            'OpenAI-Organization': this.organization,
            ...this._options.defaultHeaders,
        };
    }
    authHeaders(opts) {
        return { Authorization: `Bearer ${this.apiKey}` };
    }
}
_a = OpenAI;
OpenAI.OpenAI = _a;
OpenAI.APIError = Errors.APIError;
OpenAI.APIConnectionError = Errors.APIConnectionError;
OpenAI.APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
OpenAI.APIUserAbortError = Errors.APIUserAbortError;
OpenAI.NotFoundError = Errors.NotFoundError;
OpenAI.ConflictError = Errors.ConflictError;
OpenAI.RateLimitError = Errors.RateLimitError;
OpenAI.BadRequestError = Errors.BadRequestError;
OpenAI.AuthenticationError = Errors.AuthenticationError;
OpenAI.InternalServerError = Errors.InternalServerError;
OpenAI.PermissionDeniedError = Errors.PermissionDeniedError;
OpenAI.UnprocessableEntityError = Errors.UnprocessableEntityError;
export const { APIError, APIConnectionError, APIConnectionTimeoutError, APIUserAbortError, NotFoundError, ConflictError, RateLimitError, BadRequestError, AuthenticationError, InternalServerError, PermissionDeniedError, UnprocessableEntityError, } = Errors;
export var toFile = Uploads.toFile;
export var fileFromPath = Uploads.fileFromPath;
(function (OpenAI) {
    // Helper functions
    OpenAI.toFile = Uploads.toFile;
    OpenAI.fileFromPath = Uploads.fileFromPath;
    OpenAI.Page = Pagination.Page;
    OpenAI.CursorPage = Pagination.CursorPage;
    OpenAI.Completions = API.Completions;
    OpenAI.Chat = API.Chat;
    OpenAI.Edits = API.Edits;
    OpenAI.Embeddings = API.Embeddings;
    OpenAI.Files = API.Files;
    OpenAI.FileObjectsPage = API.FileObjectsPage;
    OpenAI.Images = API.Images;
    OpenAI.Audio = API.Audio;
    OpenAI.Moderations = API.Moderations;
    OpenAI.Models = API.Models;
    OpenAI.ModelsPage = API.ModelsPage;
    OpenAI.FineTuning = API.FineTuning;
    OpenAI.FineTunes = API.FineTunes;
    OpenAI.FineTunesPage = API.FineTunesPage;
})(OpenAI || (OpenAI = {}));
export default OpenAI;
//# sourceMappingURL=index.mjs.map