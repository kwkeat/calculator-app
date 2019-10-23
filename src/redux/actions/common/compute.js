const NAME = 'COMMON';

export const SET_EXPRESSION = `${NAME}/SET_EXPRESSION`;
export const CLEAR_EXPRESSION = `${NAME}/CLEAR_EXPRESSION`;
export const COMPUTE_EXPRESSION = `${NAME}/COMPUTE_EXPRESSION`;

export const setExpression = expression => ({
  type: SET_EXPRESSION,
  expression,
});

export const clearExpression = () => ({
  type: CLEAR_EXPRESSION,
});

export const computeExpression = expression => ({
  type: COMPUTE_EXPRESSION,
  expression,
});
