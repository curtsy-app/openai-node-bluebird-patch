"use strict";
// File generated from our OpenAPI spec by Stainless.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Audio = void 0;
const resource_1 = require("openai/resource.js");
const transcriptions_1 = require("./transcriptions.js");
const translations_1 = require("./translations.js");
const API = __importStar(require("./index.js"));
class Audio extends resource_1.APIResource {
    constructor() {
        super(...arguments);
        this.transcriptions = new transcriptions_1.Transcriptions(this.client);
        this.translations = new translations_1.Translations(this.client);
    }
}
exports.Audio = Audio;
(function (Audio) {
    Audio.Transcriptions = API.Transcriptions;
    Audio.Translations = API.Translations;
})(Audio || (exports.Audio = Audio = {}));
//# sourceMappingURL=audio.js.map