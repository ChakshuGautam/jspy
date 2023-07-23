import { Token, ASTNode } from './common';

export function parse(tokens: Token[]): ASTNode {
  let current = 0;

  function walk(): ASTNode {
    let token = tokens[current];

    if (token.type === 'number') {
      current++;
      return { type: 'NumberLiteral', value: token.value };
    }

    throw new TypeError(
      'I dont know what this token is: ' + JSON.stringify(token)
    );
  }

  let ast: ASTNode = walk(); // Parse the first token

  while (current < tokens.length) {
    let token = tokens[current];

    if (token.type === 'plus') {
      // Consume the 'plus' token
      current++;

      // The right side of the '+' will be the next node
      let right = walk();

      // Create a new 'AdditionExpression' with the current AST on the left and the new node on the right
      ast = { type: 'AdditionExpression', left: ast, right };
    } else {
      throw new TypeError(
        'I dont know what this token is: ' + JSON.stringify(token)
      );
    }
  }

  return ast;
}
