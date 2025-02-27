// File generated from our OpenAPI spec by Stainless.
import { APIResource } from "openai/resource.mjs";
import { Completions } from "./completions.mjs";
import * as API from "./index.mjs";
export class Chat extends APIResource {
    constructor() {
        super(...arguments);
        this.completions = new Completions(this.client);
    }
}
(function (Chat) {
    Chat.Completions = API.Completions;
})(Chat || (Chat = {}));
//# sourceMappingURL=chat.mjs.map