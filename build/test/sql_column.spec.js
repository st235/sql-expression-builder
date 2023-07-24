"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const sql_column_1 = require("../src/sql_column");
const sql_literal_1 = require("../src/sql_literal");
const sql_types_1 = require("../src/sql_types");
describe('SqlColumn tests', () => {
    it('Default column generates sql nullable column.', () => {
        const column = new sql_column_1.SqlColumn('test', new sql_types_1.SqlBoolean());
        chai_1.assert.equal(column.getRawExpression(), 'test BOOL NULL');
    });
    it('Unique column has unique qualifier.', () => {
        const column = new sql_column_1.SqlColumn('some_column', new sql_types_1.SqlVarchar(50));
        column.setIsUnique(true);
        chai_1.assert.equal(column.getRawExpression(), 'some_column VARCHAR(50) NULL UNIQUE');
    });
    it('Not null flag generates a column with non null qualifier.', () => {
        const column = new sql_column_1.SqlColumn('column3', new sql_types_1.SqlInteger());
        column.setIsOptional(false);
        chai_1.assert.equal(column.getRawExpression(), 'column3 INT NOT NULL');
    });
    it('Primary key flag generates a column with primary key qualifier.', () => {
        const column = new sql_column_1.SqlColumn('the_best_column', new sql_types_1.SqlBoolean());
        column.setIsPrimaryKey(true);
        chai_1.assert.equal(column.getRawExpression(), 'the_best_column BOOL NULL PRIMARY KEY');
    });
    it('Auto increment flag generates a column with auto increment qualifier.', () => {
        const column = new sql_column_1.SqlColumn('the_best_column', new sql_types_1.SqlInteger());
        column.setIsAutoIncrement(true);
        chai_1.assert.equal(column.getRawExpression(), 'the_best_column INT NULL AUTO_INCREMENT');
    });
    it('Default adds default to the generated expression.', () => {
        const column = new sql_column_1.SqlColumn('the_best_column', new sql_types_1.SqlInteger());
        column.setDefaultExpression(new sql_literal_1.SqlLiteral('55'));
        chai_1.assert.equal(column.getRawExpression(), 'the_best_column INT NULL DEFAULT 55');
    });
    it('All flags are true and expression is correct.', () => {
        const column = new sql_column_1.SqlColumn('the_best_column', new sql_types_1.SqlVarchar(55));
        column.setIsUnique(true);
        column.setIsOptional(false);
        column.setIsPrimaryKey(true);
        column.setIsAutoIncrement(true);
        column.setDefaultExpression(new sql_literal_1.SqlLiteral('\'hello world\''));
        chai_1.assert.equal(column.getRawExpression(), 'the_best_column VARCHAR(55) NOT NULL DEFAULT \'hello world\' AUTO_INCREMENT UNIQUE PRIMARY KEY');
    });
});
