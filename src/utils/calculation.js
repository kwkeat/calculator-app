const { Parser } = require('expr-eval');

export const calculate = equation => Parser.evaluate(equation.replace('%', '/100')).toString();
