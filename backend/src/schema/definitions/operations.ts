import {
    GraphQLObjectType,
    GraphQLString,
} from "graphql";

export const OperationObjectType: GraphQLObjectType = new GraphQLObjectType({
    name: "Operation",
    fields: {
        status: {type: GraphQLString},
    }
});