"use strict";
// File generated from our OpenAPI spec by Stainless.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Translations = void 0;
const resource_1 = require("openai/resource.js");
const core_1 = require("openai/core.js");
class Translations extends resource_1.APIResource {
    /**
     * Translates audio into English.
     */
    create(body, options) {
        return this.post('/audio/translations', (0, core_1.multipartFormRequestOptions)({ body, ...options }));
    }
}
exports.Translations = Translations;
(function (Translations) {
})(Translations || (exports.Translations = Translations = {}));
//# sourceMappingURL=translations.js.map