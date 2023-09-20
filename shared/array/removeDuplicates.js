"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(inputArray) {
    return Array.from(new Set(inputArray))
        .filter((item) => {
        // todo this filter is temporary, remove after fixing project build
        // when this was created the problem was that there are scripts in stricts
        // that reads all endpoints(and similar) from folders and they would make duplicates
        // such as myEndpoint.ts and myEndpoint.js which further rabbithole creates
        // duplication errors
        return !item.endsWith('.js');
    });
}
exports.default = default_1;
