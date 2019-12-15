import express from 'express';
import graphqHTTP from 'express-graphql';
import schema from './schema';
const app = express();

app.get('/', (req, res) => {
    res.send('GraphQL is amazing!');
});

const root = { friend: () => {
    return{
        "id": 30875432,
        "firstName": "Pius",
        "lastName": "Elon",
        "gender": "Male",
        "Language": "Kikuyu",
        "email": "elon.pius@me.com"
    }
} };

app.use('/graphql', graphqHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(8080, () => console.log('Running server on port localhost:8080/graphql'));