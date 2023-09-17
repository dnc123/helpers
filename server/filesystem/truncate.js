"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
function truncate(targetPath) {
    if (!fs_1.default.existsSync(targetPath)) {
        return;
    }
    const files = fs_1.default.readdirSync(targetPath);
    for (const file of files) {
        const filePath = path_1.default.join(targetPath, file);
        const stats = fs_1.default.statSync(filePath);
        if (stats.isDirectory()) {
            truncate(filePath);
            fs_1.default.rmdirSync(filePath);
        }
        else {
            fs_1.default.unlinkSync(filePath);
        }
    }
}
exports.default = truncate;
