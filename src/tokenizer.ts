import { Token } from './common';

export function tokenize(input: string): Token[] {
  let tokens: Token[] = [];
  let current = 0;

  while (current < input.length) {
    let char = input[current];

    // Skip whitespace
    if (/\s/.test(char)) {
      current++;
      continue;
    }

    // Check for numbers
    if (/[0-9]/.test(char)) {
      let value = '';

      // Keep appending digits to value
      while (/[0-9]/.test(char)) {
        value += char;
        char = input[++current];
      }

      tokens.push({ type: 'number', value: Number(value) });
      continue;
    }

    // Check for '+'
    if (char === '+') {
      tokens.push({ type: 'plus' });
      current++;
      continue;
    }

    if (char === '-') {
      tokens.push({ type: 'minus' });
      current++;
      continue;
    }

    throw new TypeError('I dont know what this character is: ' + char);
  }

  return tokens;
}
