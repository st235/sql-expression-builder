"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SqlCreateTable = void 0;
const asserts_1 = require("./utils/asserts");
class SqlCreateTable {
    constructor(tableName) {
        this._columns = new Array();
        this._checkIfNotExists = false;
        this._isTemporary = false;
        this._column_names_lookup = new Set();
        this._tableName = tableName;
    }
    setIsTemporary(isTemporary) {
        this._isTemporary = isTemporary;
    }
    setCheckIfNotExists(checkIfNotExists) {
        this._checkIfNotExists = checkIfNotExists;
    }
    addColumn(column) {
        (0, asserts_1.assert)(!this._column_names_lookup.has(column.getName()), `Met column with the same name (${column.getName()}) twice.`);
        this._columns.push(column);
        this._column_names_lookup.add(column.getName());
    }
    getRawExpression() {
        (0, asserts_1.assert)(this._columns.length > 0, 'Columns should not be empty');
        let expressionsList = Array();
        expressionsList.push('CREATE');
        if (this._isTemporary) {
            expressionsList.push('TEMPORARY');
        }
        expressionsList.push('TABLE');
        if (this._checkIfNotExists) {
            expressionsList.push('IF NOT EXISTS');
        }
        expressionsList.push(this._tableName);
        expressionsList.push('(' + this._columns.map(column => column.getRawExpression()).join(', ') + ')');
        return expressionsList.join(' ');
    }
}
exports.SqlCreateTable = SqlCreateTable;
