import { Lexer } from 'builder_hub/lexer'
import { Parser } from 'builder_hub/parser'
import { Interpreter } from 'builder_hub/interpreter'
import { Service } from 'builder_hub/service'
import { config } from 'builder_hub/example'

const program = `
foo = 43
print foo
`
const lexer = new Lexer(program)
const parser = new Parser(lexer.lex())
const interpreter = new Interpreter(parser.parseProgram())
interpreter.interpret()

const service = new Service(config)
service.serve()
