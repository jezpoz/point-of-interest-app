import {GraphQLSchema} from "graphql"; 
import {QueryObjectType as query} from "./query"
import {MutationObjectType as mutation} from "./mutation";
import {NodeInterface} from "./definitions/node";

export const schema: GraphQLSchema = new GraphQLSchema({
    query,
    mutation,
});

