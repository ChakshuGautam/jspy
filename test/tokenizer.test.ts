import { tokenize } from '../src';

describe('tokenize', () => {
  it('should tokenize a single number', () => {
    expect(tokenize('2')).toEqual([{ type: 'number', value: 2 }]);
  });

  it('should tokenize a simple addition', () => {
    expect(tokenize('2 + 2')).toEqual([
      { type: 'number', value: 2 },
      { type: 'plus' },
      { type: 'number', value: 2 },
    ]);
  });

  it('should tokenize multiple additions', () => {
    expect(tokenize('2 + 2 + 3')).toEqual([
      { type: 'number', value: 2 },
      { type: 'plus' },
      { type: 'number', value: 2 },
      { type: 'plus' },
      { type: 'number', value: 3 },
    ]);
  });

  it('should ignore whitespace', () => {
    expect(tokenize('  2 +   2   ')).toEqual([
      { type: 'number', value: 2 },
      { type: 'plus' },
      { type: 'number', value: 2 },
    ]);
  });

  it('should tokenize a simple subtraction', () => {
    expect(tokenize('2 - 2')).toEqual([
      { type: 'number', value: 2 },
      { type: 'minus' },
      { type: 'number', value: 2 },
    ]);
  });

  it('should throw an error for unrecognized characters', () => {
    expect(() => tokenize('2 * 2')).toThrow(TypeError);
  });
});
