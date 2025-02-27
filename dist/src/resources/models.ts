// File generated from our OpenAPI spec by Stainless.

import * as Core from "../core.js";
import { APIResource } from "../resource.js";
import * as API from "./index.js";
import { Page } from "../pagination.js";

export class Models extends APIResource {
  /**
   * Retrieves a model instance, providing basic information about the model such as
   * the owner and permissioning.
   */
  retrieve(model: string, options?: Core.RequestOptions): Core.APIPromise<Model> {
    return this.get(`/models/${model}`, options);
  }

  /**
   * Lists the currently available models, and provides basic information about each
   * one such as the owner and availability.
   */
  list(options?: Core.RequestOptions): Core.PagePromise<ModelsPage, Model> {
    return this.getAPIList('/models', ModelsPage, options);
  }

  /**
   * Delete a fine-tuned model. You must have the Owner role in your organization to
   * delete a model.
   */
  del(model: string, options?: Core.RequestOptions): Core.APIPromise<ModelDeleted> {
    return this.delete(`/models/${model}`, options);
  }
}

/**
 * Note: no pagination actually occurs yet, this is for forwards-compatibility.
 */
export class ModelsPage extends Page<Model> {}
// alias so we can export it in the namespace
type _ModelsPage = ModelsPage;

/**
 * Describes an OpenAI model offering that can be used with the API.
 */
export interface Model {
  /**
   * The model identifier, which can be referenced in the API endpoints.
   */
  id: string;

  /**
   * The Unix timestamp (in seconds) when the model was created.
   */
  created: number;

  /**
   * The object type, which is always "model".
   */
  object: string;

  /**
   * The organization that owns the model.
   */
  owned_by: string;
}

export interface ModelDeleted {
  id: string;

  deleted: boolean;

  object: string;
}

export namespace Models {
  export import Model = API.Model;
  export import ModelDeleted = API.ModelDeleted;
  export type ModelsPage = _ModelsPage;
}
