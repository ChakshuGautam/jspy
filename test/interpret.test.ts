import { tokenize, parse, interpret } from '../src'; // assuming you've added the interpret function to interpreter.ts

describe('interpret', () => {
  it('should interpret a single number', () => {
    expect(interpret(parse(tokenize('2')))).toEqual(2);
  });

  it('should interpret a simple addition', () => {
    expect(interpret(parse(tokenize('2 + 2')))).toEqual(4);
  });

  it('should interpret multiple additions', () => {
    expect(interpret(parse(tokenize('2 + 2 + 3')))).toEqual(7);
  });
});
