import {
    GraphQLID,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLString,
    GraphQLFloat,
    GraphQLEnumType,
    GraphQLList,
    GraphQLInputObjectType,
} from "graphql";

import {UserObjectType} from "./user";
import {NodeInterface} from "./node";

export const LocationObjectType: GraphQLObjectType = new GraphQLObjectType({
    name: "Location",
    interfaces: [NodeInterface],
    fields: {
        id: {type: new GraphQLNonNull(GraphQLID)},
        latitude: {type: new GraphQLNonNull(GraphQLFloat)},
        longitude: {type: new GraphQLNonNull(GraphQLFloat)},
        name: {type: new GraphQLNonNull(GraphQLString)},
        locationType: {type: new GraphQLNonNull(GraphQLString)},
        description: {type: GraphQLString},
        homepage: {type: GraphQLString},
        addedByUser: {type: new GraphQLNonNull(UserObjectType)},
        editedBy: {type: new GraphQLList(new GraphQLNonNull(UserObjectType))},
    },
    description: "A location"
});

export const LocationObjectInputType: GraphQLInputObjectType = new GraphQLInputObjectType({
    name: "Location",
    fields: () => ({
        latitude: {type: new GraphQLNonNull(GraphQLFloat)},
        longitude: {type: new GraphQLNonNull(GraphQLFloat)},
        name: {type: new GraphQLNonNull(GraphQLString)},
        locationType: {type: new GraphQLNonNull(GraphQLString)},
        description: {type: GraphQLString},
        homepage: {type: GraphQLString},
        addedByUser: {type: new GraphQLNonNull(UserObjectType)},
        editedBy: {type: new GraphQLList(new GraphQLNonNull(UserObjectType))}
    }),
    description: "A location"
});