// File generated from our OpenAPI spec by Stainless.
import { APIResource } from "openai/resource.mjs";
import { multipartFormRequestOptions } from "openai/core.mjs";
export class Translations extends APIResource {
    /**
     * Translates audio into English.
     */
    create(body, options) {
        return this.post('/audio/translations', multipartFormRequestOptions({ body, ...options }));
    }
}
(function (Translations) {
})(Translations || (Translations = {}));
//# sourceMappingURL=translations.mjs.map