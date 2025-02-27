// File generated from our OpenAPI spec by Stainless.
import { APIResource } from "openai/resource.mjs";
import { sleep } from "openai/core.mjs";
import { APIConnectionTimeoutError } from "openai/error.mjs";
import { multipartFormRequestOptions } from "openai/core.mjs";
import { Page } from "openai/pagination.mjs";
export class Files extends APIResource {
    /**
     * Upload a file that contains document(s) to be used across various
     * endpoints/features. Currently, the size of all the files uploaded by one
     * organization can be up to 1 GB. Please contact us if you need to increase the
     * storage limit.
     */
    create(body, options) {
        return this.post('/files', multipartFormRequestOptions({ body, ...options }));
    }
    /**
     * Returns information about a specific file.
     */
    retrieve(fileId, options) {
        return this.get(`/files/${fileId}`, options);
    }
    /**
     * Returns a list of files that belong to the user's organization.
     */
    list(options) {
        return this.getAPIList('/files', FileObjectsPage, options);
    }
    /**
     * Delete a file.
     */
    del(fileId, options) {
        return this.delete(`/files/${fileId}`, options);
    }
    /**
     * Returns the contents of the specified file
     */
    retrieveContent(fileId, options) {
        return this.get(`/files/${fileId}/content`, {
            ...options,
            headers: { Accept: 'application/json', ...options === null || options === void 0 ? void 0 : options.headers },
        });
    }
    /**
     * Waits for the given file to be processed, default timeout is 30 mins.
     */
    async waitForProcessing(id, { pollInterval = 5000, maxWait = 30 * 60 * 1000 } = {}) {
        const TERMINAL_STATES = new Set(['processed', 'error', 'deleted']);
        const start = Date.now();
        let file = await this.retrieve(id);
        while (!file.status || !TERMINAL_STATES.has(file.status)) {
            await sleep(pollInterval);
            file = await this.retrieve(id);
            if (Date.now() - start > maxWait) {
                throw new APIConnectionTimeoutError({
                    message: `Giving up on waiting for file ${id} to finish processing after ${maxWait} milliseconds.`,
                });
            }
        }
        return file;
    }
}
/**
 * Note: no pagination actually occurs yet, this is for forwards-compatibility.
 */
export class FileObjectsPage extends Page {
}
(function (Files) {
})(Files || (Files = {}));
//# sourceMappingURL=files.mjs.map