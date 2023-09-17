"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailRegex = exports.dateRegex = void 0;
exports.dateRegex = RegExp(/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/);
exports.emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
