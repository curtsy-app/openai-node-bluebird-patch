"use strict";
// File generated from our OpenAPI spec by Stainless.
Object.defineProperty(exports, "__esModule", { value: true });
exports.FineTunesPage = exports.FineTunes = void 0;
const resource_1 = require("openai/resource.js");
const pagination_1 = require("openai/pagination.js");
class FineTunes extends resource_1.APIResource {
    /**
     * Creates a job that fine-tunes a specified model from a given dataset.
     *
     * Response includes details of the enqueued job including job status and the name
     * of the fine-tuned models once complete.
     *
     * [Learn more about fine-tuning](/docs/guides/legacy-fine-tuning)
     */
    create(body, options) {
        return this.post('/fine-tunes', { body, ...options });
    }
    /**
     * Gets info about the fine-tune job.
     *
     * [Learn more about fine-tuning](/docs/guides/legacy-fine-tuning)
     */
    retrieve(fineTuneId, options) {
        return this.get(`/fine-tunes/${fineTuneId}`, options);
    }
    /**
     * List your organization's fine-tuning jobs
     */
    list(options) {
        return this.getAPIList('/fine-tunes', FineTunesPage, options);
    }
    /**
     * Immediately cancel a fine-tune job.
     */
    cancel(fineTuneId, options) {
        return this.post(`/fine-tunes/${fineTuneId}/cancel`, options);
    }
    listEvents(fineTuneId, query, options) {
        var _a;
        return this.get(`/fine-tunes/${fineTuneId}/events`, {
            query,
            timeout: 86400000,
            ...options,
            stream: (_a = query === null || query === void 0 ? void 0 : query.stream) !== null && _a !== void 0 ? _a : false,
        });
    }
}
exports.FineTunes = FineTunes;
/**
 * Note: no pagination actually occurs yet, this is for forwards-compatibility.
 */
class FineTunesPage extends pagination_1.Page {
}
exports.FineTunesPage = FineTunesPage;
(function (FineTunes) {
})(FineTunes || (exports.FineTunes = FineTunes = {}));
//# sourceMappingURL=fine-tunes.js.map