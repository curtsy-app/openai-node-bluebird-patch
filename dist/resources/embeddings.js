"use strict";
// File generated from our OpenAPI spec by Stainless.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Embeddings = void 0;
const resource_1 = require("openai/resource.js");
class Embeddings extends resource_1.APIResource {
    /**
     * Creates an embedding vector representing the input text.
     */
    create(body, options) {
        return this.post('/embeddings', { body, ...options });
    }
}
exports.Embeddings = Embeddings;
(function (Embeddings) {
})(Embeddings || (exports.Embeddings = Embeddings = {}));
//# sourceMappingURL=embeddings.js.map