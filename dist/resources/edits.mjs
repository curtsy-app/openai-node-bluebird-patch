// File generated from our OpenAPI spec by Stainless.
import { APIResource } from "openai/resource.mjs";
export class Edits extends APIResource {
    /**
     * Creates a new edit for the provided input, instruction, and parameters.
     *
     * @deprecated The Edits API is deprecated; please use Chat Completions instead.
     *
     * https://openai.com/blog/gpt-4-api-general-availability#deprecation-of-the-edits-api
     */
    create(body, options) {
        return this.post('/edits', { body, ...options });
    }
}
(function (Edits) {
})(Edits || (Edits = {}));
//# sourceMappingURL=edits.mjs.map