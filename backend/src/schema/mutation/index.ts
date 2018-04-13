import {GraphQLObjectType} from "graphql";
import {addLocationFieldConfig as addLocation} from "./fieldConfigs/addLocation";

export const MutationObjectType: GraphQLObjectType = new GraphQLObjectType({
    name: "Mutation",
    description: "Mutations",
    fields: () => ({
        addLocation,
    }),
});