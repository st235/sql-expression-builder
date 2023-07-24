import { assert } from './utils/asserts';
import { SqlExpression } from './sql_expression';

/**
 * A marker interface for all expressions that are
 * considered as a data type in sql.
 */
interface SqlType extends SqlExpression {
};

/**
 * Declares an sql boolean data type.
 */
class SqlBoolean implements SqlType {

    getRawExpression(): string {
        return 'BOOL';
    }

}

/**
 * Declares an sql integert data type.
 */
class SqlInteger implements SqlType {

    getRawExpression(): string {
        return 'INT';
    }

}

/**
 * Declares an sql float data type.
 */
class SqlFloat implements SqlType {

    getRawExpression(): string {
        return 'FLOAT';
    }

}

/**
 * Declares an sql double data type.
 */
class SqlDouble implements SqlType {

    getRawExpression(): string {
        return 'DOUBLE';
    }

}

/**
 * Declares an sql decimal data type.
 */
class SqlDecimal implements SqlType {

    getRawExpression(): string {
        return 'DECIMAL';
    }

}

/**
 * Declares an sql string data type.
 */
class SqlVarchar implements SqlType {

    readonly length: number;

    constructor(length: number) {
        assert(length > 0, `Length should be positive but got ${length}`);
        this.length = length;
    }

    getRawExpression(): string {
        return `VARCHAR(${this.length})`;
    }

}

/**
 * Declares an sql date data type.
 */
class SqlDate implements SqlType {

    getRawExpression(): string {
        return 'DATE';
    }

}

export { SqlType, SqlBoolean, SqlInteger, SqlFloat, SqlDouble, SqlDecimal, SqlVarchar, SqlDate };
