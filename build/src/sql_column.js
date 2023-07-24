"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SqlColumn = void 0;
const asserts_1 = require("./utils/asserts");
/**
 * Represents a column in the SQL expression.
 * Usually, is used in CREATE TABLE expression.
 *
 *
 */
class SqlColumn {
    constructor(name, type) {
        this._isOptional = true;
        this._defaultExpression = null;
        this._isAutoIncrement = false;
        this._isPrimaryKey = false;
        this._isUnique = false;
        (0, asserts_1.assert)(name != null, 'Name cannot be null');
        (0, asserts_1.assert)(type != null, 'Type cannot be null');
        this._name = name;
        this._type = type;
    }
    setIsOptional(isOptional) {
        this._isOptional = isOptional;
    }
    setDefaultExpression(defaultExpression) {
        this._defaultExpression = defaultExpression;
    }
    setIsAutoIncrement(isAutoincrement) {
        this._isAutoIncrement = isAutoincrement;
    }
    setIsPrimaryKey(isPrimaryKey) {
        this._isPrimaryKey = isPrimaryKey;
    }
    setIsUnique(isUnique) {
        this._isUnique = isUnique;
    }
    getRawExpression() {
        let expressionsList = new Array();
        expressionsList.push(this._name);
        expressionsList.push(this._type.getRawExpression());
        if (this._isOptional) {
            expressionsList.push('NULL');
        }
        else {
            expressionsList.push('NOT NULL');
        }
        if (this._defaultExpression != null) {
            expressionsList.push('DEFAULT');
            expressionsList.push(this._defaultExpression.getRawExpression());
        }
        if (this._isAutoIncrement) {
            expressionsList.push('AUTO_INCREMENT');
        }
        if (this._isUnique) {
            expressionsList.push('UNIQUE');
        }
        if (this._isPrimaryKey) {
            expressionsList.push('PRIMARY KEY');
        }
        return expressionsList.join(' ').trim();
    }
}
exports.SqlColumn = SqlColumn;
