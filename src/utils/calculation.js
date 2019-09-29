const { Parser } = require('expr-eval');


export const calculate = equation => Parser.evaluate(equation).toString();
