import { SqlExpression } from './sql_expression';
declare class SqlLiteral implements SqlExpression {
    private readonly _literal;
    constructor(literal: string);
    getRawExpression(): string;
}
export { SqlLiteral };
