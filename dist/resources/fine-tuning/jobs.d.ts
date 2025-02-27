import * as Core from "openai/core";
import { APIResource } from "openai/resource";
import * as Files from "openai/resources/files";
import * as API from "./index.js";
import { CursorPage, CursorPageParams } from "openai/pagination";
export declare class Jobs extends APIResource {
    /**
     * Creates a job that fine-tunes a specified model from a given dataset.
     *
     * Response includes details of the enqueued job including job status and the name
     * of the fine-tuned models once complete.
     *
     * [Learn more about fine-tuning](/docs/guides/fine-tuning)
     */
    create(body: JobCreateParams, options?: Core.RequestOptions): Core.APIPromise<FineTuningJob>;
    /**
     * Get info about a fine-tuning job.
     *
     * [Learn more about fine-tuning](/docs/guides/fine-tuning)
     */
    retrieve(fineTuningJobId: string, options?: Core.RequestOptions): Core.APIPromise<FineTuningJob>;
    /**
     * List your organization's fine-tuning jobs
     */
    list(query?: JobListParams, options?: Core.RequestOptions): Core.PagePromise<FineTuningJobsPage, FineTuningJob>;
    list(options?: Core.RequestOptions): Core.PagePromise<FineTuningJobsPage, FineTuningJob>;
    /**
     * Immediately cancel a fine-tune job.
     */
    cancel(fineTuningJobId: string, options?: Core.RequestOptions): Core.APIPromise<FineTuningJob>;
    /**
     * Get status updates for a fine-tuning job.
     */
    listEvents(fineTuningJobId: string, query?: JobListEventsParams, options?: Core.RequestOptions): Core.PagePromise<FineTuningJobEventsPage, FineTuningJobEvent>;
    listEvents(fineTuningJobId: string, options?: Core.RequestOptions): Core.PagePromise<FineTuningJobEventsPage, FineTuningJobEvent>;
}
export declare class FineTuningJobsPage extends CursorPage<FineTuningJob> {
}
type _FineTuningJobsPage = FineTuningJobsPage;
export declare class FineTuningJobEventsPage extends CursorPage<FineTuningJobEvent> {
}
type _FineTuningJobEventsPage = FineTuningJobEventsPage;
/**
 * The `fine_tuning.job` object represents a fine-tuning job that has been created
 * through the API.
 */
export interface FineTuningJob {
    /**
     * The object identifier, which can be referenced in the API endpoints.
     */
    id: string;
    /**
     * The Unix timestamp (in seconds) for when the fine-tuning job was created.
     */
    created_at: number;
    /**
     * The name of the fine-tuned model that is being created.
     */
    fine_tuned_model: string | null;
    /**
     * The hyperparameters used for the fine-tuning job. See the
     * [fine-tuning guide](/docs/guides/fine-tuning) for more details.
     */
    hyperparameters: FineTuningJob.Hyperparameters;
    /**
     * The base model that is being fine-tuned.
     */
    model: string;
    /**
     * The object type, which is always "fine_tuning.job".
     */
    object: string;
    /**
     * The organization that owns the fine-tuning job.
     */
    organization_id: string;
    /**
     * The compiled results files for the fine-tuning job.
     */
    result_files: Array<Files.FileObject>;
    /**
     * The current status of the fine-tuning job, which can be either `created`,
     * `pending`, `running`, `succeeded`, `failed`, or `cancelled`.
     */
    status: string;
    /**
     * The total number of billable tokens processed by this fine tuning job.
     */
    trained_tokens: number;
    /**
     * The file ID used for training.
     */
    training_file: string;
    /**
     * The file ID used for validation.
     */
    validation_file: string | null;
    /**
     * The Unix timestamp (in seconds) for when the fine-tuning job was finished.
     */
    finished_at?: number;
}
export declare namespace FineTuningJob {
    /**
     * The hyperparameters used for the fine-tuning job. See the
     * [fine-tuning guide](/docs/guides/fine-tuning) for more details.
     */
    interface Hyperparameters {
        /**
         * The number of epochs to train the model for. An epoch refers to one full cycle
         * through the training dataset. "Auto" decides the optimal number of epochs based
         * on the size of the dataset. If setting the number manually, we support any
         * number between 1 and 50 epochs.
         */
        n_epochs?: 'auto' | number;
    }
}
export interface FineTuningJobEvent {
    id: string;
    created_at: number;
    level: 'info' | 'warn' | 'error';
    message: string;
    object: string;
}
export interface JobCreateParams {
    /**
     * The name of the model to fine-tune. You can select one of the
     * [supported models](/docs/guides/fine-tuning/what-models-can-be-fine-tuned).
     */
    model: (string & {}) | 'babbage-002' | 'davinci-002' | 'gpt-3.5-turbo';
    /**
     * The ID of an uploaded file that contains training data.
     *
     * See [upload file](/docs/api-reference/files/upload) for how to upload a file.
     *
     * Your dataset must be formatted as a JSONL file. Additionally, you must upload
     * your file with the purpose `fine-tune`.
     *
     * See the [fine-tuning guide](/docs/guides/fine-tuning) for more details.
     */
    training_file: string;
    /**
     * The hyperparameters used for the fine-tuning job.
     */
    hyperparameters?: JobCreateParams.Hyperparameters;
    /**
     * A string of up to 40 characters that will be added to your fine-tuned model
     * name.
     *
     * For example, a `suffix` of "custom-model-name" would produce a model name like
     * `ft:gpt-3.5-turbo:openai:custom-model-name:7p4lURel`.
     */
    suffix?: string | null;
    /**
     * The ID of an uploaded file that contains validation data.
     *
     * If you provide this file, the data is used to generate validation metrics
     * periodically during fine-tuning. These metrics can be viewed in the fine-tuning
     * results file. The same data should not be present in both train and validation
     * files.
     *
     * Your dataset must be formatted as a JSONL file. You must upload your file with
     * the purpose `fine-tune`.
     *
     * See the [fine-tuning guide](/docs/guides/fine-tuning) for more details.
     */
    validation_file?: string | null;
}
export declare namespace JobCreateParams {
    /**
     * The hyperparameters used for the fine-tuning job.
     */
    interface Hyperparameters {
        /**
         * The number of epochs to train the model for. An epoch refers to one full cycle
         * through the training dataset.
         */
        n_epochs?: 'auto' | number;
    }
}
export interface JobListParams extends CursorPageParams {
}
export interface JobListEventsParams extends CursorPageParams {
}
export declare namespace Jobs {
    export import FineTuningJob = API.FineTuningJob;
    export import FineTuningJobEvent = API.FineTuningJobEvent;
    type FineTuningJobsPage = _FineTuningJobsPage;
    type FineTuningJobEventsPage = _FineTuningJobEventsPage;
    export import JobCreateParams = API.JobCreateParams;
    export import JobListParams = API.JobListParams;
    export import JobListEventsParams = API.JobListEventsParams;
}
export {};
//# sourceMappingURL=jobs.d.ts.map