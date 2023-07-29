import { SqlExpression } from './sql_expression';
import { SqlColumn } from './sql_column';
import { assert } from './utils/asserts';

class SqlCreateTable implements SqlExpression {

    private readonly _tableName: string;

    private _columns: Array<SqlColumn> = new Array<SqlColumn>();
    private _checkIfNotExists: boolean = false;
    private _isTemporary: boolean = false;

    private _column_names_lookup: Set<string> = new Set<string>();

    constructor(tableName: string) {
        this._tableName = tableName;
    }

    setIsTemporary(isTemporary: boolean) {
        this._isTemporary = isTemporary;
    }

    setCheckIfNotExists(checkIfNotExists: boolean) {
        this._checkIfNotExists = checkIfNotExists;
    }

    addColumn(column: SqlColumn) {
        assert(!this._column_names_lookup.has(column.getName()),
               `Met column with the same name (${column.getName()}) twice.`);

        this._columns.push(column);
        this._column_names_lookup.add(column.getName());
    }

    getRawExpression(): string {
        assert(this._columns.length > 0, 'Columns should not be empty');

        let expressionsList = Array<string>();

        expressionsList.push('CREATE');

        if (this._isTemporary) {
            expressionsList.push('TEMPORARY');
        }

        expressionsList.push('TABLE');

        if (this._checkIfNotExists) {
            expressionsList.push('IF NOT EXISTS');
        }

        expressionsList.push(this._tableName);

        expressionsList.push('(' + this._columns.map(column => column.getRawExpression()).join(', ') + ')');

        return expressionsList.join(' ');
    }
}

export { SqlCreateTable };
