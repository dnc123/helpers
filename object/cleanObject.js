"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(targetObject) {
    var propNames = Object.getOwnPropertyNames(targetObject);
    for (var i = 0; i < propNames.length; i++) {
        var propName = propNames[i];
        if (targetObject[propName] === null || targetObject[propName] === undefined) {
            delete targetObject[propName];
        }
    }
}
exports.default = default_1;
