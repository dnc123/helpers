"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const capitalizeAll_1 = __importDefault(require("./capitalizeAll"));
function default_1(text) {
    const capitalizedText = (0, capitalizeAll_1.default)(text);
    const sanitizedText = capitalizedText.replace(/[^\w\s]/g, '').trim();
    const words = sanitizedText.split(/\s+/);
    const hashtags = words.map((word, index) => (index === 0 ? `#${word}` : word));
    return hashtags.join('');
}
exports.default = default_1;
