// File generated from our OpenAPI spec by Stainless.
import { APIResource } from "openai/resource.mjs";
import { multipartFormRequestOptions } from "openai/core.mjs";
export class Images extends APIResource {
    /**
     * Creates a variation of a given image.
     */
    createVariation(body, options) {
        return this.post('/images/variations', multipartFormRequestOptions({ body, ...options }));
    }
    /**
     * Creates an edited or extended image given an original image and a prompt.
     */
    edit(body, options) {
        return this.post('/images/edits', multipartFormRequestOptions({ body, ...options }));
    }
    /**
     * Creates an image given a prompt.
     */
    generate(body, options) {
        return this.post('/images/generations', { body, ...options });
    }
}
(function (Images) {
})(Images || (Images = {}));
//# sourceMappingURL=images.mjs.map