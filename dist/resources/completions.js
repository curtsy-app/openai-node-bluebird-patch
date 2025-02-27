"use strict";
// File generated from our OpenAPI spec by Stainless.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Completions = void 0;
const resource_1 = require("openai/resource.js");
class Completions extends resource_1.APIResource {
    create(body, options) {
        var _a;
        return this.post('/completions', { body, ...options, stream: (_a = body.stream) !== null && _a !== void 0 ? _a : false });
    }
}
exports.Completions = Completions;
(function (Completions) {
})(Completions || (exports.Completions = Completions = {}));
//# sourceMappingURL=completions.js.map