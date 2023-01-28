"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function default_1(unverifiedJWT, secretJWTKey) {
    return jsonwebtoken_1.default.verify(unverifiedJWT, secretJWTKey);
}
exports.default = default_1;
