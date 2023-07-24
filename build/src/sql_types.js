"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SqlDate = exports.SqlVarchar = exports.SqlDecimal = exports.SqlDouble = exports.SqlFloat = exports.SqlInteger = exports.SqlBoolean = void 0;
const asserts_1 = require("./utils/asserts");
;
/**
 * Declares an sql boolean data type.
 */
class SqlBoolean {
    getRawExpression() {
        return 'BOOL';
    }
}
exports.SqlBoolean = SqlBoolean;
/**
 * Declares an sql integert data type.
 */
class SqlInteger {
    getRawExpression() {
        return 'INT';
    }
}
exports.SqlInteger = SqlInteger;
/**
 * Declares an sql float data type.
 */
class SqlFloat {
    getRawExpression() {
        return 'FLOAT';
    }
}
exports.SqlFloat = SqlFloat;
/**
 * Declares an sql double data type.
 */
class SqlDouble {
    getRawExpression() {
        return 'DOUBLE';
    }
}
exports.SqlDouble = SqlDouble;
/**
 * Declares an sql decimal data type.
 */
class SqlDecimal {
    getRawExpression() {
        return 'DECIMAL';
    }
}
exports.SqlDecimal = SqlDecimal;
/**
 * Declares an sql string data type.
 */
class SqlVarchar {
    constructor(length) {
        (0, asserts_1.assert)(length > 0, `Length should be positive but got ${length}`);
        this.length = length;
    }
    getRawExpression() {
        return `VARCHAR(${this.length})`;
    }
}
exports.SqlVarchar = SqlVarchar;
/**
 * Declares an sql date data type.
 */
class SqlDate {
    getRawExpression() {
        return 'DATE';
    }
}
exports.SqlDate = SqlDate;
