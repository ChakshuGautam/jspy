import { tokenize, parse } from '../src';

describe('parse', () => {
  it('should parse a single number', () => {
    expect(parse(tokenize('2'))).toEqual({ type: 'NumberLiteral', value: 2 });
  });

  it('should parse a simple addition', () => {
    const ast = parse(tokenize('2 + 2'));
    expect(ast).toEqual({
      type: 'AdditionExpression',
      left: { type: 'NumberLiteral', value: 2 },
      right: { type: 'NumberLiteral', value: 2 },
    });
  });

  it('should parse multiple additions', () => {
    expect(parse(tokenize('2 + 2 + 3'))).toEqual({
      type: 'AdditionExpression',
      left: {
        type: 'AdditionExpression',
        left: { type: 'NumberLiteral', value: 2 },
        right: { type: 'NumberLiteral', value: 2 },
      },
      right: { type: 'NumberLiteral', value: 3 },
    });
  });

  it('should parse a simple subtraction', () => {
    expect(parse(tokenize('2 - 2'))).toEqual({
      type: 'SubtractionExpression',
      left: { type: 'NumberLiteral', value: 2 },
      right: { type: 'NumberLiteral', value: 2 },
    });
  });

  it('should throw an error for incomplete expressions', () => {
    expect(() => parse([{ type: 'plus' }])).toThrow(TypeError);
  });
});
