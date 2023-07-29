import { assert } from './utils/asserts';
import { SqlExpression } from './sql_expression';
import { SqlType } from './sql_types';

/**
 * Represents a column in the SQL expression.
 * Usually, is used in CREATE TABLE expression.
 * 
 * 
 */
class SqlColumn implements SqlExpression {

    private readonly _name: string;
    private readonly _type: SqlType;

    private _isOptional: boolean = true;
    private _defaultExpression?: SqlExpression = null;
    private _isAutoIncrement: boolean = false;
    private _isPrimaryKey: boolean = false;
    private _isUnique: boolean = false;

    constructor(name: string, type: SqlType) {
        assert(name != null, 'Name cannot be null');
        assert(type != null, 'Type cannot be null');

        this._name = name;
        this._type = type;
    }

    getName(): string {
        return this._name;
    }

    setIsOptional(isOptional: boolean) {
        this._isOptional = isOptional;
    }

    setDefaultExpression(defaultExpression: SqlExpression) {
        this._defaultExpression = defaultExpression;
    }

    setIsAutoIncrement(isAutoincrement: boolean) {
        this._isAutoIncrement = isAutoincrement;
    }

    setIsPrimaryKey(isPrimaryKey: boolean) {
        this._isPrimaryKey = isPrimaryKey;
    }

    setIsUnique(isUnique: boolean) {
        this._isUnique = isUnique;
    }

    getRawExpression(): string {
        let expressionsList = new Array<string>();

        expressionsList.push(this._name);
        expressionsList.push(this._type.getRawExpression());

        if (this._isOptional) {
            expressionsList.push('NULL');
        } else {
            expressionsList.push('NOT NULL');
        }

        if (this._defaultExpression != null) {
            expressionsList.push('DEFAULT');
            expressionsList.push(this._defaultExpression.getRawExpression());
        }

        if (this._isAutoIncrement) {
            expressionsList.push('AUTO_INCREMENT');
        }

        if (this._isUnique) {
            expressionsList.push('UNIQUE');
        }

        if (this._isPrimaryKey) {
            expressionsList.push('PRIMARY KEY');
        }

        return expressionsList.join(' ').trim();
    }

}

export { SqlColumn };
