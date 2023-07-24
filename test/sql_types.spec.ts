import { assert } from 'chai';
import { SqlBoolean, SqlInteger, SqlFloat, SqlDouble, SqlDecimal, SqlVarchar, SqlDate } from '../src/sql_types';

describe('Types tests', () => {

    it('SqlBoolean should return BOOL as a raw expression.', () => {
        const sqlBoolean = new SqlBoolean();
        assert.equal(sqlBoolean.getRawExpression(), 'BOOL');
    });

    it('SqlInteger should return INT as a raw expression.', () => {
        const sqlInteger = new SqlInteger();
        assert.equal(sqlInteger.getRawExpression(), 'INT');
    });

    it('SqlFloat should return FLOAT as a raw expression.', () => {
        const sqlFloat = new SqlFloat();
        assert.equal(sqlFloat.getRawExpression(), 'FLOAT');
    });

    it('SqlDouble should return DOUBLE as a raw expression.', () => {
        const sqlDouble = new SqlDouble();
        assert.equal(sqlDouble.getRawExpression(), 'DOUBLE');
    });

    it('SqlDecimal should return DECIMAL as a raw expression.', () => {
        const sqlDecimal = new SqlDecimal();
        assert.equal(sqlDecimal.getRawExpression(), 'DECIMAL');
    });

    it('SqlVarchar should return VARCHAR with correct length as a raw expression.', () => {
        const sqlVarchar = new SqlVarchar(100);
        assert.equal(sqlVarchar.getRawExpression(), 'VARCHAR(100)');
    });

    it('SqlVarchar throws an error when received length smaller or equal to zero.', () => {
        assert.throws(() => new SqlVarchar(-100));
    });

    it('SqlDate should return DATE as a raw expression.', () => {
        const sqlDate = new SqlDate();
        assert.equal(sqlDate.getRawExpression(), 'DATE');
    });

});