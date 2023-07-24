"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SqlLiteral = void 0;
class SqlLiteral {
    constructor(literal) {
        this._literal = literal;
    }
    getRawExpression() {
        return this._literal;
    }
}
exports.SqlLiteral = SqlLiteral;
