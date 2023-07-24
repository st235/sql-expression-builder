function assert(condition: unknown, message?: string): asserts condition {
    if (condition === true) {
        return;
    }

    throw new Error(message);
}

export { assert };
