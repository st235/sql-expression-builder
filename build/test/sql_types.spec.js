"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const sql_types_1 = require("../src/sql_types");
describe('Types tests', () => {
    it('SqlBoolean should return BOOL as a raw expression.', () => {
        const sqlBoolean = new sql_types_1.SqlBoolean();
        chai_1.assert.equal(sqlBoolean.getRawExpression(), 'BOOL');
    });
    it('SqlInteger should return INT as a raw expression.', () => {
        const sqlInteger = new sql_types_1.SqlInteger();
        chai_1.assert.equal(sqlInteger.getRawExpression(), 'INT');
    });
    it('SqlFloat should return FLOAT as a raw expression.', () => {
        const sqlFloat = new sql_types_1.SqlFloat();
        chai_1.assert.equal(sqlFloat.getRawExpression(), 'FLOAT');
    });
    it('SqlDouble should return DOUBLE as a raw expression.', () => {
        const sqlDouble = new sql_types_1.SqlDouble();
        chai_1.assert.equal(sqlDouble.getRawExpression(), 'DOUBLE');
    });
    it('SqlDecimal should return DECIMAL as a raw expression.', () => {
        const sqlDecimal = new sql_types_1.SqlDecimal();
        chai_1.assert.equal(sqlDecimal.getRawExpression(), 'DECIMAL');
    });
    it('SqlVarchar should return VARCHAR with correct length as a raw expression.', () => {
        const sqlVarchar = new sql_types_1.SqlVarchar(100);
        chai_1.assert.equal(sqlVarchar.getRawExpression(), 'VARCHAR(100)');
    });
    it('SqlVarchar throws an error when received length smaller or equal to zero.', () => {
        chai_1.assert.throws(() => new sql_types_1.SqlVarchar(-100));
    });
    it('SqlDate should return DATE as a raw expression.', () => {
        const sqlDate = new sql_types_1.SqlDate();
        chai_1.assert.equal(sqlDate.getRawExpression(), 'DATE');
    });
});
