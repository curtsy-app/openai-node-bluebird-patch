// File generated from our OpenAPI spec by Stainless.
import { APIResource } from "openai/resource.mjs";
export class Embeddings extends APIResource {
    /**
     * Creates an embedding vector representing the input text.
     */
    create(body, options) {
        return this.post('/embeddings', { body, ...options });
    }
}
(function (Embeddings) {
})(Embeddings || (Embeddings = {}));
//# sourceMappingURL=embeddings.mjs.map