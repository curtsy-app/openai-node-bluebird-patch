"use strict";
// File generated from our OpenAPI spec by Stainless.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Moderations = void 0;
const resource_1 = require("openai/resource.js");
class Moderations extends resource_1.APIResource {
    /**
     * Classifies if text violates OpenAI's Content Policy
     */
    create(body, options) {
        return this.post('/moderations', { body, ...options });
    }
}
exports.Moderations = Moderations;
(function (Moderations) {
})(Moderations || (exports.Moderations = Moderations = {}));
//# sourceMappingURL=moderations.js.map