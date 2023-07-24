/**
 * Represents a generic SQL expression.
 */
interface SqlExpression {

    /**
     * Returns a string representation of the
     * final expression.
     */
    getRawExpression(): string;

}

export { SqlExpression };
