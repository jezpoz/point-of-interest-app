const Express = require('express');
const ExpressGraphQL = require('express-graphql');

import {schema} from './schema/index';

const app = Express();

app.use('/graphql', ExpressGraphQL({
    schema: schema, 
    graphiql: true,
    pretty: true,
}));

app.listen(4000);
console.log("App is running on port 4000");

const helloString: string = '';