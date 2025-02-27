/**
 * Disclaimer: modules in _shims aren't intended to be imported by SDK users.
 */

import { FormData } from "./form-data-node.js";
import type { RequestOptions } from "../core.js";
import { Readable } from 'node:stream';
import { FormDataEncoder } from 'form-data-encoder';
import { MultipartBody } from "../uploads.js";

export async function getMultipartRequestOptions<T extends {} = Record<string, unknown>>(
  form: FormData,
  opts: RequestOptions<T>,
): Promise<RequestOptions<T>> {
  const encoder = new FormDataEncoder(form);
  const readable = Readable.from(encoder);
  const body = new MultipartBody(readable);
  const headers = {
    ...opts.headers,
    ...encoder.headers,
    'Content-Length': encoder.contentLength,
  };

  return { ...opts, body: body as any, headers };
}
