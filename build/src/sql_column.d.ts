import { SqlExpression } from './sql_expression';
import { SqlType } from './sql_types';
/**
 * Represents a column in the SQL expression.
 * Usually, is used in CREATE TABLE expression.
 *
 *
 */
declare class SqlColumn implements SqlExpression {
    private readonly _name;
    private readonly _type;
    private _isOptional;
    private _defaultExpression?;
    private _isAutoIncrement;
    private _isPrimaryKey;
    private _isUnique;
    constructor(name: string, type: SqlType);
    setIsOptional(isOptional: boolean): void;
    setDefaultExpression(defaultExpression: SqlExpression): void;
    setIsAutoIncrement(isAutoincrement: boolean): void;
    setIsPrimaryKey(isPrimaryKey: boolean): void;
    setIsUnique(isUnique: boolean): void;
    getRawExpression(): string;
}
export { SqlColumn };
