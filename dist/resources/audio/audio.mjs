// File generated from our OpenAPI spec by Stainless.
import { APIResource } from "openai/resource.mjs";
import { Transcriptions } from "./transcriptions.mjs";
import { Translations } from "./translations.mjs";
import * as API from "./index.mjs";
export class Audio extends APIResource {
    constructor() {
        super(...arguments);
        this.transcriptions = new Transcriptions(this.client);
        this.translations = new Translations(this.client);
    }
}
(function (Audio) {
    Audio.Transcriptions = API.Transcriptions;
    Audio.Translations = API.Translations;
})(Audio || (Audio = {}));
//# sourceMappingURL=audio.mjs.map