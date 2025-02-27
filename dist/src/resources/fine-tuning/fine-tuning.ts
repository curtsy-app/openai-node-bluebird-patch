// File generated from our OpenAPI spec by Stainless.

import { APIResource } from "../../resource.js";
import { Jobs } from "./jobs.js";
import * as API from "./index.js";

export class FineTuning extends APIResource {
  jobs: Jobs = new Jobs(this.client);
}

export namespace FineTuning {
  export import Jobs = API.Jobs;
  export import FineTuningJob = API.FineTuningJob;
  export import FineTuningJobEvent = API.FineTuningJobEvent;
  export import FineTuningJobsPage = API.FineTuningJobsPage;
  export import FineTuningJobEventsPage = API.FineTuningJobEventsPage;
  export import JobCreateParams = API.JobCreateParams;
  export import JobListParams = API.JobListParams;
  export import JobListEventsParams = API.JobListEventsParams;
}
