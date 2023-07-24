import { SqlExpression } from './sql_expression';

class SqlLiteral implements SqlExpression {

    private readonly _literal: string;

    constructor(literal: string) {
        this._literal = literal;
    }

    getRawExpression(): string {
        return this._literal;
    }

}

export { SqlLiteral };
