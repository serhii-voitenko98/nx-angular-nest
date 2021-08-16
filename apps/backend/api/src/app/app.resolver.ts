import GraphQLJSON from 'graphql-type-json';
import { GraphQLScalarType } from 'graphql';
import { Kind } from 'graphql/language';

export const resolverMap = {
  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    serialize(value: Date) {
      return value.toISOString(); // Value from the client
    },
    parseValue(value: string) {
      return new Date(value); // Value from the client
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.STRING) {
        return new Date(ast.value); // ast value in always in string format
      }
      return null; // Invalid hard-coded value (not an integer)
    },
  }),
  JSON: GraphQLJSON,
};
