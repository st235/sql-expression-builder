import { SqlExpression } from './sql_expression';
/**
 * A marker interface for all expressions that are
 * considered as a data type in sql.
 */
interface SqlType extends SqlExpression {
}
/**
 * Declares an sql boolean data type.
 */
declare class SqlBoolean implements SqlType {
    getRawExpression(): string;
}
/**
 * Declares an sql integert data type.
 */
declare class SqlInteger implements SqlType {
    getRawExpression(): string;
}
/**
 * Declares an sql float data type.
 */
declare class SqlFloat implements SqlType {
    getRawExpression(): string;
}
/**
 * Declares an sql double data type.
 */
declare class SqlDouble implements SqlType {
    getRawExpression(): string;
}
/**
 * Declares an sql decimal data type.
 */
declare class SqlDecimal implements SqlType {
    getRawExpression(): string;
}
/**
 * Declares an sql string data type.
 */
declare class SqlVarchar implements SqlType {
    private readonly _length;
    constructor(length: number);
    getRawExpression(): string;
}
/**
 * Declares an sql date data type.
 */
declare class SqlDate implements SqlType {
    getRawExpression(): string;
}
export { SqlType, SqlBoolean, SqlInteger, SqlFloat, SqlDouble, SqlDecimal, SqlVarchar, SqlDate };
