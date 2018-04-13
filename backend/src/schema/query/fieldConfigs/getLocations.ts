import {
    GraphQLFieldConfig,
    GraphQLList,
} from "graphql";
import {LocationObjectType} from "../../definitions/locations";
import {ILocation} from "../../types";
import {locations} from "../../data/locations";

export const getLocationsFieldConfig: GraphQLFieldConfig<any, any> = {
    type: new GraphQLList(LocationObjectType),
    description: "All locations",
    resolve: (): ILocation[] => {
        return locations;
    }
};