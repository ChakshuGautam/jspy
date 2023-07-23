import { Token, ASTNode } from './common';

export function parse(tokens: Token[]): ASTNode {
  let current = 0;

  function walk(): ASTNode {
    let token = tokens[current];

    if (token.type === 'number') {
      current++;
      return { type: 'NumberLiteral', value: token.value };
    }

    if (token.type === 'plus' || token.type === 'minus') {
      // Save the current token and consume it
      let operation = token;
      current++;

      // The left side of the operation will be the previous node
      let left = walk();

      // The right side of the operation will be the next node
      let right = walk();

      if (operation.type === 'plus') {
        return { type: 'AdditionExpression', left, right };
      } else {
        // operation.type === 'minus'
        return { type: 'SubtractionExpression', left, right };
      }
    }

    throw new TypeError(
      'I dont know what this token is: ' + JSON.stringify(token)
    );
  }

  // Start the AST with the first token
  let left = walk();

  // While there are tokens left, keep walking the tree
  while (current < tokens.length) {
    let operation = tokens[current];
    current++;
    let right = walk();

    if (operation.type === 'plus') {
      left = { type: 'AdditionExpression', left, right };
    } else {
      // operation.type === 'minus'
      left = { type: 'SubtractionExpression', left, right };
    }
  }

  return left;
}
