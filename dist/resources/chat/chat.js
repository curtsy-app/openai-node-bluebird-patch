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
exports.Chat = void 0;
const resource_1 = require("openai/resource.js");
const completions_1 = require("./completions.js");
const API = __importStar(require("./index.js"));
class Chat extends resource_1.APIResource {
    constructor() {
        super(...arguments);
        this.completions = new completions_1.Completions(this.client);
    }
}
exports.Chat = Chat;
(function (Chat) {
    Chat.Completions = API.Completions;
})(Chat || (exports.Chat = Chat = {}));
//# sourceMappingURL=chat.js.map