import { APIResource } from "openai/resource";
import { Transcriptions } from "./transcriptions.js";
import { Translations } from "./translations.js";
import * as API from "./index.js";
export declare class Audio extends APIResource {
    transcriptions: Transcriptions;
    translations: Translations;
}
export declare namespace Audio {
    export import Transcriptions = API.Transcriptions;
    export import Transcription = API.Transcription;
    export import TranscriptionCreateParams = API.TranscriptionCreateParams;
    export import Translations = API.Translations;
    export import Translation = API.Translation;
    export import TranslationCreateParams = API.TranslationCreateParams;
}
//# sourceMappingURL=audio.d.ts.map