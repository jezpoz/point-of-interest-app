import {makeExecutableSchema} from 'graphql-tools';
import {resolvers} from './resolvers';
import {readFileSync} from 'fs';

const typeDefs: string = readFileSync(__dirname + '/../../graphql-schema/schema.graphql').toString();

export const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});

