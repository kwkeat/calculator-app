import { calculate } from 'utils/calculation';

describe('Calculate', () => {
  let expression;
  it('evaluates the expression correctly', () => {
    expression = '2+3+7-7*3';
    expect(calculate(expression)).toBe('-9');

    expression = '0+3+4';
    expect(calculate(expression)).toBe('7');

    expression = '0-7';
    expect(calculate(expression)).toBe('-7');
  });

  it('evaluates expressions starting with a "-" operator', () => {
    expression = '-32-6';
    expect(calculate(expression)).toBe('-38');
  });

  it('does mutliplication and division first', () => {
    expression = '2+2+3/4*3+78';
    expect(calculate(expression)).toBe('84.25');
  });
});
