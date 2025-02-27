// File generated from our OpenAPI spec by Stainless.
import { APIResource } from "openai/resource.mjs";
export class Moderations extends APIResource {
    /**
     * Classifies if text violates OpenAI's Content Policy
     */
    create(body, options) {
        return this.post('/moderations', { body, ...options });
    }
}
(function (Moderations) {
})(Moderations || (Moderations = {}));
//# sourceMappingURL=moderations.mjs.map