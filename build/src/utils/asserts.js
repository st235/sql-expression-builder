"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assert = void 0;
function assert(condition, message) {
    if (condition === true) {
        return;
    }
    throw new Error(message);
}
exports.assert = assert;
