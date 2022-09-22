export default class TokenType {
    name: string;
    regex: string;

    constructor(name: string, regex: string) {
        this.name = name;
        this.regex = regex;
    }
}

export const tokenTypeList = {
    'NUMBER': new TokenType('NUMBER', '[0-9]*'),
    'VARIABLE': new TokenType('VARIABLE', '[a-z]*'),
    'SEMICOLON': new TokenType('SEMICOLON', ';'),
    'SPACE': new TokenType('SPACE', '[ \\n\\t\\r]'),
    'ASSIGN': new TokenType('ASSIGN', 'EQUALS'),
    'LOG': new TokenType('LOG', 'PRINT'),
    'PLUS': new TokenType('PLUS', '>>>'),
    'DIVISION': new TokenType('DIVISION', '><'),
    'MULTIPLY': new TokenType('MULTIPLY', '<>'),
    'DEGREE': new TokenType('DEGREE', '>=<'),
    'MINUS': new TokenType('MINUS', '<<<'),
    'LPAR': new TokenType('LPAR', '\\('),
    'RPAR': new TokenType('RPAR', '\\)'),


}