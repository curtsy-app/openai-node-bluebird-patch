"use strict";
// File generated from our OpenAPI spec by Stainless.
Object.defineProperty(exports, "__esModule", { value: true });
exports.FineTuningJobEventsPage = exports.FineTuningJobsPage = exports.Jobs = void 0;
const resource_1 = require("openai/resource.js");
const core_1 = require("openai/core.js");
const pagination_1 = require("openai/pagination.js");
class Jobs extends resource_1.APIResource {
    /**
     * Creates a job that fine-tunes a specified model from a given dataset.
     *
     * Response includes details of the enqueued job including job status and the name
     * of the fine-tuned models once complete.
     *
     * [Learn more about fine-tuning](/docs/guides/fine-tuning)
     */
    create(body, options) {
        return this.post('/fine_tuning/jobs', { body, ...options });
    }
    /**
     * Get info about a fine-tuning job.
     *
     * [Learn more about fine-tuning](/docs/guides/fine-tuning)
     */
    retrieve(fineTuningJobId, options) {
        return this.get(`/fine_tuning/jobs/${fineTuningJobId}`, options);
    }
    list(query = {}, options) {
        if ((0, core_1.isRequestOptions)(query)) {
            return this.list({}, query);
        }
        return this.getAPIList('/fine_tuning/jobs', FineTuningJobsPage, { query, ...options });
    }
    /**
     * Immediately cancel a fine-tune job.
     */
    cancel(fineTuningJobId, options) {
        return this.post(`/fine_tuning/jobs/${fineTuningJobId}/cancel`, options);
    }
    listEvents(fineTuningJobId, query = {}, options) {
        if ((0, core_1.isRequestOptions)(query)) {
            return this.listEvents(fineTuningJobId, {}, query);
        }
        return this.getAPIList(`/fine_tuning/jobs/${fineTuningJobId}/events`, FineTuningJobEventsPage, {
            query,
            ...options,
        });
    }
}
exports.Jobs = Jobs;
class FineTuningJobsPage extends pagination_1.CursorPage {
}
exports.FineTuningJobsPage = FineTuningJobsPage;
class FineTuningJobEventsPage extends pagination_1.CursorPage {
}
exports.FineTuningJobEventsPage = FineTuningJobEventsPage;
(function (Jobs) {
})(Jobs || (exports.Jobs = Jobs = {}));
//# sourceMappingURL=jobs.js.map