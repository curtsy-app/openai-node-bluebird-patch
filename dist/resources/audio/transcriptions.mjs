// File generated from our OpenAPI spec by Stainless.
import { APIResource } from "openai/resource.mjs";
import { multipartFormRequestOptions } from "openai/core.mjs";
export class Transcriptions extends APIResource {
    /**
     * Transcribes audio into the input language.
     */
    create(body, options) {
        return this.post('/audio/transcriptions', multipartFormRequestOptions({ body, ...options }));
    }
}
(function (Transcriptions) {
})(Transcriptions || (Transcriptions = {}));
//# sourceMappingURL=transcriptions.mjs.map