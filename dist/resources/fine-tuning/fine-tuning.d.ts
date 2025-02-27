import { APIResource } from "openai/resource";
import { Jobs } from "./jobs.js";
import * as API from "./index.js";
export declare class FineTuning extends APIResource {
    jobs: Jobs;
}
export declare namespace FineTuning {
    export import Jobs = API.Jobs;
    export import FineTuningJob = API.FineTuningJob;
    export import FineTuningJobEvent = API.FineTuningJobEvent;
    export import FineTuningJobsPage = API.FineTuningJobsPage;
    export import FineTuningJobEventsPage = API.FineTuningJobEventsPage;
    export import JobCreateParams = API.JobCreateParams;
    export import JobListParams = API.JobListParams;
    export import JobListEventsParams = API.JobListEventsParams;
}
//# sourceMappingURL=fine-tuning.d.ts.map