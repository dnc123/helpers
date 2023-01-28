"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var capitalizeFirstLetter_1 = __importDefault(require("./capitalizeFirstLetter"));
function default_1(sentence) {
    return sentence
        .split(" ")
        .map(capitalizeFirstLetter_1.default)
        .join(" ");
}
exports.default = default_1;
