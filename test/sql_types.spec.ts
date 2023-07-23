import { assert } from 'chai';
import { SqlInteger } from '../src/sql_types';

describe('Types tests', () => {

    it('SqlInteger should return INT as a raw expression.', () => {
        const sqlInteger = new SqlInteger();
        assert.equal(sqlInteger.getRawExpression(), 'INT');
    });

});