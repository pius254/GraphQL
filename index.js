import express from 'express';
import graphqHTTP from 'express-graphql';
import schema from './schema';
const app = express();

app.get('/', (req, res) => {
    res.send('GraphQL is amazing!');
});

const root = { hello: () => "Hi, i'm Pius" };

app.use('/graphql', graphqHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(8080, () => console.log('Running server on port localhost:8080/graphql'));