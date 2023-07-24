import { assert } from 'chai';
import { SqlColumn } from '../src/sql_column';
import { SqlLiteral } from '../src/sql_literal';
import { SqlBoolean, SqlInteger, SqlVarchar } from '../src/sql_types';

describe('SqlColumn tests', () => {

    it('Default column generates sql nullable column.', () => {
        const column = new SqlColumn('test', new SqlBoolean());
        assert.equal(column.getRawExpression(), 'test BOOL NULL');
    });

    it('Unique column has unique qualifier.', () => {
        const column = new SqlColumn('some_column', new SqlVarchar(50));
        column.setIsUnique(true);

        assert.equal(column.getRawExpression(), 'some_column VARCHAR(50) NULL UNIQUE');
    });

    it('Not null flag generates a column with non null qualifier.', () => {
        const column = new SqlColumn('column3', new SqlInteger());
        column.setIsOptional(false);

        assert.equal(column.getRawExpression(), 'column3 INT NOT NULL');
    });

    it('Primary key flag generates a column with primary key qualifier.', () => {
        const column = new SqlColumn('the_best_column', new SqlBoolean());
        column.setIsPrimaryKey(true);

        assert.equal(column.getRawExpression(), 'the_best_column BOOL NULL PRIMARY KEY');
    });

    it('Auto increment flag generates a column with auto increment qualifier.', () => {
        const column = new SqlColumn('the_best_column', new SqlInteger());
        column.setIsAutoIncrement(true);

        assert.equal(column.getRawExpression(), 'the_best_column INT NULL AUTO_INCREMENT');
    });

    it('Default adds default to the generated expression.', () => {
        const column = new SqlColumn('the_best_column', new SqlInteger());
        
        column.setDefaultExpression(new SqlLiteral('55'));

        assert.equal(column.getRawExpression(), 'the_best_column INT NULL DEFAULT 55');
    });

    it('All flags are true and expression is correct.', () => {
        const column = new SqlColumn('the_best_column', new SqlVarchar(55));

        column.setIsUnique(true);
        column.setIsOptional(false);
        column.setIsPrimaryKey(true);
        column.setIsAutoIncrement(true);
        column.setDefaultExpression(new SqlLiteral('\'hello world\''));

        assert.equal(column.getRawExpression(), 'the_best_column VARCHAR(55) NOT NULL DEFAULT \'hello world\' AUTO_INCREMENT UNIQUE PRIMARY KEY');
    });

});
