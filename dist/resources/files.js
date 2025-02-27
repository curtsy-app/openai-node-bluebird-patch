"use strict";
// File generated from our OpenAPI spec by Stainless.
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileObjectsPage = exports.Files = void 0;
const resource_1 = require("openai/resource.js");
const core_1 = require("openai/core.js");
const error_1 = require("openai/error.js");
const core_2 = require("openai/core.js");
const pagination_1 = require("openai/pagination.js");
class Files extends resource_1.APIResource {
    /**
     * Upload a file that contains document(s) to be used across various
     * endpoints/features. Currently, the size of all the files uploaded by one
     * organization can be up to 1 GB. Please contact us if you need to increase the
     * storage limit.
     */
    create(body, options) {
        return this.post('/files', (0, core_2.multipartFormRequestOptions)({ body, ...options }));
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
            await (0, core_1.sleep)(pollInterval);
            file = await this.retrieve(id);
            if (Date.now() - start > maxWait) {
                throw new error_1.APIConnectionTimeoutError({
                    message: `Giving up on waiting for file ${id} to finish processing after ${maxWait} milliseconds.`,
                });
            }
        }
        return file;
    }
}
exports.Files = Files;
/**
 * Note: no pagination actually occurs yet, this is for forwards-compatibility.
 */
class FileObjectsPage extends pagination_1.Page {
}
exports.FileObjectsPage = FileObjectsPage;
(function (Files) {
})(Files || (exports.Files = Files = {}));
//# sourceMappingURL=files.js.map