import express from 'express';
import graphqHTTP from 'express-graphql';
import schema from './schema';
const app = express();

app.get('/', (req, res) => {
    res.send('GraphQL is amazing!');
});

class Friend {
    constructor(id, { firstName, lastName, gender, language, email}) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.language = language;
        this.email = email;
    }    
}

const friendDatabase = {};

const root = { 
    friend: () => {
        return{
            "id": 30875432,
            "firstName": "Pius",
            "lastName": "Elon",
            "gender": "Male",
            "Language": "Kikuyu",
            "emails": "elon.pius@me.com"
        }
    },
    createFriend: ({input}) => {
        let id = require('crypto').randomBytes(10).toString('hex');
        friendDatabase[id] = input;
        return new Friend(id, input);
    }
};

app.use('/graphql', graphqHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(8080, () => console.log('Running server on port localhost:8080/graphql'));