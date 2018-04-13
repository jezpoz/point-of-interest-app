import {GraphQLFieldConfig} from "graphql";
import {UserObjectType} from "../../definitions/user";
import {IUser} from "../../types";
import {user} from "../../data/user";

export const meFieldConfig: GraphQLFieldConfig<any, any> = {
    type: UserObjectType,
    description: "You, the user",
    resolve: (): IUser => {
        return user;
    },
}