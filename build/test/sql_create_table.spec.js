"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const sql_create_table_1 = require("../src/sql_create_table");
const sql_column_1 = require("../src/sql_column");
const sql_types_1 = require("../src/sql_types");
describe('SqlCreateTable tests', () => {
    it('Table creation with empty columns list should fail.', () => {
        const sqlCreateTable = new sql_create_table_1.SqlCreateTable('my_awesome_table');
        chai_1.assert.throws(() => sqlCreateTable.getRawExpression());
    });
    it('Table creation fails if there are multiple columns with the same name.', () => {
        const sqlCreateTable = new sql_create_table_1.SqlCreateTable('my_awesome_table');
        chai_1.assert.throws(() => {
            sqlCreateTable.addColumn(_create_column('a', new sql_types_1.SqlBoolean()));
            sqlCreateTable.addColumn(_create_column('a', new sql_types_1.SqlInteger()));
        });
    });
    it('Create table request with default parameters returns valid sql request.', () => {
        const sqlCreateTable = new sql_create_table_1.SqlCreateTable('my_awesome_table');
        const column_a = _create_column('a', new sql_types_1.SqlInteger(), 
        /* isOptional */ true, 
        /* isAutoIncrement */ true, 
        /* isUnique */ true);
        const column_b = _create_column('b', new sql_types_1.SqlBoolean(), 
        /* isOptional */ true);
        const column_c = _create_column('c', new sql_types_1.SqlInteger(), 
        /* isOptional */ false, 
        /* isAutoIncrement */ false, 
        /* isUnique */ true);
        sqlCreateTable.addColumn(column_a);
        sqlCreateTable.addColumn(column_b);
        sqlCreateTable.addColumn(column_c);
        chai_1.assert.equal(sqlCreateTable.getRawExpression(), `CREATE TABLE my_awesome_table (${column_a.getRawExpression()}, ${column_b.getRawExpression()}, ${column_c.getRawExpression()})`);
    });
    it('Create table if exists returns valid sql request.', () => {
        const sqlCreateTable = new sql_create_table_1.SqlCreateTable('my_awesome_table');
        sqlCreateTable.setCheckIfNotExists(true);
        const column_c = _create_column('c', new sql_types_1.SqlInteger(), 
        /* isOptional */ false, 
        /* isAutoIncrement */ false, 
        /* isUnique */ true);
        sqlCreateTable.addColumn(column_c);
        chai_1.assert.equal(sqlCreateTable.getRawExpression(), `CREATE TABLE IF NOT EXISTS my_awesome_table (${column_c.getRawExpression()})`);
    });
    it('Create temporary table returns valid sql request.', () => {
        const sqlCreateTable = new sql_create_table_1.SqlCreateTable('my_awesome_table');
        sqlCreateTable.setIsTemporary(true);
        const column_a = _create_column('a', new sql_types_1.SqlInteger(), 
        /* isOptional */ true, 
        /* isAutoIncrement */ true, 
        /* isUnique */ true);
        sqlCreateTable.addColumn(column_a);
        chai_1.assert.equal(sqlCreateTable.getRawExpression(), `CREATE TEMPORARY TABLE my_awesome_table (${column_a.getRawExpression()})`);
    });
});
function _create_column(name, type, isOptional = false, isAutoIncrement = false, isUnique = false) {
    const column = new sql_column_1.SqlColumn(name, type);
    column.setIsOptional(isOptional);
    column.setIsAutoIncrement(isAutoIncrement);
    column.setIsUnique(isUnique);
    return column;
}
