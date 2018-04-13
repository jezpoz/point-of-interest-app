import {GraphQLObjectType} from "graphql";
import {getLocationsFieldConfig as getLocations} from "./fieldConfigs/getLocations";
import {meFieldConfig as me} from "./fieldConfigs/me";
import {nodeFieldConfig as node} from "./fieldConfigs/node";

export const QueryObjectType: GraphQLObjectType = new GraphQLObjectType({
    name: "Query",
    description: "Queries",
    fields: () => ({
        getLocations,
        me,
        node,
    }),
});