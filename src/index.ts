import Lexer from "./Lexer";
import Parser from "./Parser";

const code = `
code EQUALS 7 >>> 9;
PRINT code;
`

const lexer = new Lexer(code);

lexer.lexAnalysis()

const parser = new Parser(lexer.tokenList);

const rootNode = parser.parseCode()

parser.run(rootNode);