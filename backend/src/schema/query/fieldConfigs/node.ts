import {
    GraphQLFieldConfig,
    GraphQLNonNull,
    GraphQLString,
    GraphQLList,
} from "graphql";
import {NodeInterface} from "../../definitions/node";
import {data} from "../../data/all";

export const nodeFieldConfig: GraphQLFieldConfig<any, any> = {
    type: new GraphQLList(NodeInterface),
    description: "Find a node",
    args: {
        id: {type: new GraphQLNonNull(GraphQLString)},
    },
    resolve(root, args): any {
        const {id} = args;
        return data.filter((d => {
            if (id === d.id) {
                return d;
            }
        }))
    }
}
