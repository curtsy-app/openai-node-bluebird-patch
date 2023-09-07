// File generated from our OpenAPI spec by Stainless.
import { APIResource } from "openai/resource.mjs";
import { Page } from "openai/pagination.mjs";
export class Models extends APIResource {
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
/**
 * Note: no pagination actually occurs yet, this is for forwards-compatibility.
 */
export class ModelsPage extends Page {
}
(function (Models) {
})(Models || (Models = {}));
//# sourceMappingURL=models.mjs.map