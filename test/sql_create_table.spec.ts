import { assert } from 'chai';

import { SqlCreateTable } from '../src/sql_create_table';
import { SqlColumn } from '../src/sql_column';
import { SqlType, SqlBoolean, SqlInteger } from '../src/sql_types';

describe('SqlCreateTable tests', () => {

    it('Table creation with empty columns list should fail.', () => {
        const sqlCreateTable = new SqlCreateTable('my_awesome_table');
        assert.throws(() => sqlCreateTable.getRawExpression());
    });

    it('Table creation fails if there are multiple columns with the same name.', () => {
        const sqlCreateTable = new SqlCreateTable('my_awesome_table');

        assert.throws(() => {
            sqlCreateTable.addColumn(_create_column('a', new SqlBoolean()));
            sqlCreateTable.addColumn(_create_column('a', new SqlInteger()));
        });
    });

    it('Create table request with default parameters returns valid sql request.', () => {
        const sqlCreateTable = new SqlCreateTable('my_awesome_table');

        const column_a = _create_column('a', new SqlInteger(),
                                /* isOptional */ true,
                                /* isAutoIncrement */ true,
                                /* isUnique */ true);

        const column_b = _create_column('b', new SqlBoolean(),
                                        /* isOptional */ true);

        const column_c = _create_column('c', new SqlInteger(),
                                        /* isOptional */ false,
                                        /* isAutoIncrement */ false,
                                        /* isUnique */ true);


        sqlCreateTable.addColumn(column_a);
        sqlCreateTable.addColumn(column_b);
        sqlCreateTable.addColumn(column_c);

        assert.equal(sqlCreateTable.getRawExpression(), `CREATE TABLE my_awesome_table (${column_a.getRawExpression()}, ${column_b.getRawExpression()}, ${column_c.getRawExpression()})`)
    });

    it('Create table if exists returns valid sql request.', () => {
        const sqlCreateTable = new SqlCreateTable('my_awesome_table');
        sqlCreateTable.setCheckIfNotExists(true);

        const column_c = _create_column('c', new SqlInteger(),
                                        /* isOptional */ false,
                                        /* isAutoIncrement */ false,
                                        /* isUnique */ true);


        sqlCreateTable.addColumn(column_c);

        assert.equal(sqlCreateTable.getRawExpression(), `CREATE TABLE IF NOT EXISTS my_awesome_table (${column_c.getRawExpression()})`)
    });

    it('Create temporary table returns valid sql request.', () => {
        const sqlCreateTable = new SqlCreateTable('my_awesome_table');
        sqlCreateTable.setIsTemporary(true);

        const column_a = _create_column('a', new SqlInteger(),
                                /* isOptional */ true,
                                /* isAutoIncrement */ true,
                                /* isUnique */ true);


        sqlCreateTable.addColumn(column_a);

        assert.equal(sqlCreateTable.getRawExpression(), `CREATE TEMPORARY TABLE my_awesome_table (${column_a.getRawExpression()})`)
    });


});

function _create_column(name: string, 
                        type: SqlType,
                        isOptional: boolean = false,
                        isAutoIncrement: boolean = false,
                        isUnique: boolean = false): SqlColumn {
    const column = new SqlColumn(name, type);

    column.setIsOptional(isOptional);
    column.setIsAutoIncrement(isAutoIncrement);
    column.setIsUnique(isUnique);

    return column;
}
