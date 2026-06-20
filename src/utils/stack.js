export const pushChange = (stack, change) => [change, ...stack];
export const peekChange = (stack) => stack[0];
export const popChange = (stack) => stack.slice(1);
