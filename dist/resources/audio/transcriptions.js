"use strict";
// File generated from our OpenAPI spec by Stainless.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transcriptions = void 0;
const resource_1 = require("openai/resource.js");
const core_1 = require("openai/core.js");
class Transcriptions extends resource_1.APIResource {
    /**
     * Transcribes audio into the input language.
     */
    create(body, options) {
        return this.post('/audio/transcriptions', (0, core_1.multipartFormRequestOptions)({ body, ...options }));
    }
}
exports.Transcriptions = Transcriptions;
(function (Transcriptions) {
})(Transcriptions || (exports.Transcriptions = Transcriptions = {}));
//# sourceMappingURL=transcriptions.js.map