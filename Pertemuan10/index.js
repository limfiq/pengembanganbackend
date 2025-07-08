const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

// In-memory data
let users = [
  { id: 1, name: "Alice", email: "alice@email.com" },
  { id: 2, name: "Bob", email: "bob@email.com" },
];

// GraphQL schema
const schema = buildSchema(`
    type User {
        id: Int
        name: String
        email: String
    }

    type Query {
        users: [User]
        user(id: Int!): User
    }

    type Mutation {
        createUser(name: String!, email: String!): User
        updateUser(id: Int!, name: String, email: String): User
        deleteUser(id: Int!): User
    }
`);

// GraphQL resolvers
const root = {
  users: () => users,
  user: ({ id }) => users.find((u) => u.id === id),
  createUser: ({ name, email }) => {
    const id = users.length ? users[users.length - 1].id + 1 : 1;
    const user = { id, name, email };
    users.push(user);
    return user;
  },
  updateUser: ({ id, name, email }) => {
    const user = users.find((u) => u.id === id);
    if (!user) return null;
    if (name !== undefined) user.name = name;
    if (email !== undefined) user.email = email;
    return user;
  },
  deleteUser: ({ id }) => {
    const index = users.findIndex((u) => u.id === id);
    if (index === -1) return null;
    const [deleted] = users.splice(index, 1);
    return deleted;
  },
};

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000/graphql");
});
