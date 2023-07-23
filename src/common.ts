export type ASTNode =
  | { type: 'NumberLiteral'; value: number }
  | { type: 'AdditionExpression'; left: ASTNode; right: ASTNode }
  | { type: 'SubtractionExpression'; left: ASTNode; right: ASTNode };

export type Token =
  | { type: 'number'; value: number }
  | { type: 'plus' }
  | { type: 'minus' };
