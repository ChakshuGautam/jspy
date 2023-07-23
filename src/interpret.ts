import { ASTNode } from './common';

export function interpret(node: ASTNode): number {
  if (node.type === 'NumberLiteral') {
    return node.value;
  }

  if (node.type === 'AdditionExpression') {
    return interpret(node.left) + interpret(node.right);
  }

  if (node.type === 'SubtractionExpression') {
    return interpret(node.left) - interpret(node.right);
  }

  throw new TypeError('I dont know what this node is: ' + JSON.stringify(node));
}
