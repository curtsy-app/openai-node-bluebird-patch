"use strict";
// File generated from our OpenAPI spec by Stainless.
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelsPage = exports.Models = void 0;
const resource_1 = require("openai/resource.js");
const pagination_1 = require("openai/pagination.js");
class Models extends resource_1.APIResource {
    /**
     * Retrieves a model instance, providing basic information about the model such as
     * the owner and permissioning.
     */
    retrieve(model, options) {
        return this.get(`/models/${model}`, options);
    }
    /**
     * Lists the currently available models, and provides basic information about each
     * one such as the owner and availability.
     */
    list(options) {
        return this.getAPIList('/models', ModelsPage, options);
    }
    /**
     * Delete a fine-tuned model. You must have the Owner role in your organization to
     * delete a model.
     */
    del(model, options) {
        return this.delete(`/models/${model}`, options);
    }
}
exports.Models = Models;
/**
 * Note: no pagination actually occurs yet, this is for forwards-compatibility.
 */
class ModelsPage extends pagination_1.Page {
}
exports.ModelsPage = ModelsPage;
(function (Models) {
})(Models || (exports.Models = Models = {}));
//# sourceMappingURL=models.js.map