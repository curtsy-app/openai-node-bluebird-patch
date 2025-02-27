// File generated from our OpenAPI spec by Stainless.
import { APIResource } from "openai/resource.mjs";
import { isRequestOptions } from "openai/core.mjs";
import { CursorPage } from "openai/pagination.mjs";
export class Jobs extends APIResource {
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
        if (isRequestOptions(query)) {
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
        if (isRequestOptions(query)) {
            return this.listEvents(fineTuningJobId, {}, query);
        }
        return this.getAPIList(`/fine_tuning/jobs/${fineTuningJobId}/events`, FineTuningJobEventsPage, {
            query,
            ...options,
        });
    }
}
export class FineTuningJobsPage extends CursorPage {
}
export class FineTuningJobEventsPage extends CursorPage {
}
(function (Jobs) {
})(Jobs || (Jobs = {}));
//# sourceMappingURL=jobs.mjs.map