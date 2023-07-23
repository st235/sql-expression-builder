"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const sql_types_1 = require("../src/sql_types");
describe('Types tests', () => {
    it('SqlInteger should return INT as a raw expression.', () => {
        const sqlInteger = new sql_types_1.SqlInteger();
        chai_1.assert.equal(sqlInteger.getRawExpression(), 'INT');
    });
});
