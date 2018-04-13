import {
    GraphQLFieldConfig,

} from "graphql";
import {LocationObjectInputType} from "../../definitions/locations";
import {OperationObjectType} from "../../definitions/operations";

export const addLocationFieldConfig: GraphQLFieldConfig<any, any> = {
    type: OperationObjectType,
    description: "Add a location",
    resolve: () => {
        return ({
            status: "SUCCESS",
        });
    },
};