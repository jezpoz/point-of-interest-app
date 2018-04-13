import {
    GraphQLID,
    GraphQLInterfaceType,
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLUnionType,
} from "graphql";
import {LocationObjectType} from "./locations";
import {UserObjectType} from "./user";
import {ILocation, IUser} from "../types";

const resolveNodeType = (data: any) => {
    if (data.displayName) {
        return UserObjectType;
    }
    if (data.longitude) {
        return LocationObjectType;
    }
}

export const NodeInterface: GraphQLInterfaceType = new GraphQLInterfaceType({
    name: "Node",
    fields: {
        id: {type: GraphQLID},
    },
    resolveType: resolveNodeType,
});