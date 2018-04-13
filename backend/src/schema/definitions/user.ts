import {
    GraphQLID,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLInputObjectType,
    GraphQLString,
} from "graphql";
import {NodeInterface} from "./node";

export const UserObjectType: GraphQLObjectType = new GraphQLObjectType({
    name: "User",
    interfaces: [NodeInterface],
    fields: {
        id: {type: new GraphQLNonNull(GraphQLID)},
        displayName: {type: new GraphQLNonNull(GraphQLString)},
        firstName: {type: GraphQLString},
        lastName: {type: GraphQLString},
        email: {type: GraphQLString},
    },
});

export const UserObjectInputType: GraphQLInputObjectType = new GraphQLInputObjectType({
    name: "User",
    fields: () => ({
        displayName: {type: new GraphQLNonNull(GraphQLString)},
        firstName: {type: GraphQLString},
        lastName: {type: GraphQLString},
        email: {type: GraphQLString},
    }),
});