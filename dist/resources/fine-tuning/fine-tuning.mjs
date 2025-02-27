// File generated from our OpenAPI spec by Stainless.
import { APIResource } from "openai/resource.mjs";
import { Jobs } from "./jobs.mjs";
import * as API from "./index.mjs";
export class FineTuning extends APIResource {
    constructor() {
        super(...arguments);
        this.jobs = new Jobs(this.client);
    }
}
(function (FineTuning) {
    FineTuning.Jobs = API.Jobs;
    FineTuning.FineTuningJobsPage = API.FineTuningJobsPage;
    FineTuning.FineTuningJobEventsPage = API.FineTuningJobEventsPage;
})(FineTuning || (FineTuning = {}));
//# sourceMappingURL=fine-tuning.mjs.map