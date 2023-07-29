import { SqlExpression } from './sql_expression';
import { SqlColumn } from './sql_column';
declare class SqlCreateTable implements SqlExpression {
    private readonly _tableName;
    private _columns;
    private _checkIfNotExists;
    private _isTemporary;
    private _column_names_lookup;
    constructor(tableName: string);
    setIsTemporary(isTemporary: boolean): void;
    setCheckIfNotExists(checkIfNotExists: boolean): void;
    addColumn(column: SqlColumn): void;
    getRawExpression(): string;
}
export { SqlCreateTable };
