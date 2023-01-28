"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var capitalizeFirstLetterOfAllWordsInString_1 = __importDefault(require("./capitalizeFirstLetterOfAllWordsInString"));
function default_1(text) {
    return "#" + (0, capitalizeFirstLetterOfAllWordsInString_1.default)(text)
        .replace(/\s/g, "");
}
exports.default = default_1;
