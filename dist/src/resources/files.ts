// File generated from our OpenAPI spec by Stainless.

import * as Core from "../core.js";
import { APIResource } from "../resource.js";
import { sleep } from "../core.js";
import { APIConnectionTimeoutError } from "../error.js";
import * as API from "./index.js";
import { type Uploadable, multipartFormRequestOptions } from "../core.js";
import { Page } from "../pagination.js";

export class Files extends APIResource {
  /**
   * Upload a file that contains document(s) to be used across various
   * endpoints/features. Currently, the size of all the files uploaded by one
   * organization can be up to 1 GB. Please contact us if you need to increase the
   * storage limit.
   */
  create(body: FileCreateParams, options?: Core.RequestOptions): Core.APIPromise<FileObject> {
    return this.post('/files', multipartFormRequestOptions({ body, ...options }));
  }

  /**
   * Returns information about a specific file.
   */
  retrieve(fileId: string, options?: Core.RequestOptions): Core.APIPromise<FileObject> {
    return this.get(`/files/${fileId}`, options);
  }

  /**
   * Returns a list of files that belong to the user's organization.
   */
  list(options?: Core.RequestOptions): Core.PagePromise<FileObjectsPage, FileObject> {
    return this.getAPIList('/files', FileObjectsPage, options);
  }

  /**
   * Delete a file.
   */
  del(fileId: string, options?: Core.RequestOptions): Core.APIPromise<FileDeleted> {
    return this.delete(`/files/${fileId}`, options);
  }

  /**
   * Returns the contents of the specified file
   */
  retrieveContent(fileId: string, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this.get(`/files/${fileId}/content`, {
      ...options,
      headers: { Accept: 'application/json', ...options?.headers },
    });
  }

  /**
   * Waits for the given file to be processed, default timeout is 30 mins.
   */
  async waitForProcessing(
    id: string,
    { pollInterval = 5000, maxWait = 30 * 60 * 1000 }: { pollInterval?: number; maxWait?: number } = {},
  ): Promise<FileObject> {
    const TERMINAL_STATES = new Set(['processed', 'error', 'deleted']);

    const start = Date.now();
    let file = await this.retrieve(id);

    while (!file.status || !TERMINAL_STATES.has(file.status)) {
      await sleep(pollInterval);

      file = await this.retrieve(id);
      if (Date.now() - start > maxWait) {
        throw new APIConnectionTimeoutError({
          message: `Giving up on waiting for file ${id} to finish processing after ${maxWait} milliseconds.`,
        });
      }
    }

    return file;
  }
}

/**
 * Note: no pagination actually occurs yet, this is for forwards-compatibility.
 */
export class FileObjectsPage extends Page<FileObject> {}
// alias so we can export it in the namespace
type _FileObjectsPage = FileObjectsPage;

export type FileContent = string;

export interface FileDeleted {
  id: string;

  deleted: boolean;

  object: string;
}

/**
 * The `File` object represents a document that has been uploaded to OpenAI.
 */
export interface FileObject {
  /**
   * The file identifier, which can be referenced in the API endpoints.
   */
  id: string;

  /**
   * The size of the file in bytes.
   */
  bytes: number;

  /**
   * The Unix timestamp (in seconds) for when the file was created.
   */
  created_at: number;

  /**
   * The name of the file.
   */
  filename: string;

  /**
   * The object type, which is always "file".
   */
  object: string;

  /**
   * The intended purpose of the file. Currently, only "fine-tune" is supported.
   */
  purpose: string;

  /**
   * The current status of the file, which can be either `uploaded`, `processed`,
   * `pending`, `error`, `deleting` or `deleted`.
   */
  status?: string;

  /**
   * Additional details about the status of the file. If the file is in the `error`
   * state, this will include a message describing the error.
   */
  status_details?: string | null;
}

export interface FileCreateParams {
  /**
   * Name of the [JSON Lines](https://jsonlines.readthedocs.io/en/latest/) file to be
   * uploaded.
   *
   * If the `purpose` is set to "fine-tune", the file will be used for fine-tuning.
   */
  file: Uploadable;

  /**
   * The intended purpose of the uploaded documents.
   *
   * Use "fine-tune" for [fine-tuning](/docs/api-reference/fine-tuning). This allows
   * us to validate the format of the uploaded file.
   */
  purpose: string;
}

export namespace Files {
  export import FileContent = API.FileContent;
  export import FileDeleted = API.FileDeleted;
  export import FileObject = API.FileObject;
  export type FileObjectsPage = _FileObjectsPage;
  export import FileCreateParams = API.FileCreateParams;
}
