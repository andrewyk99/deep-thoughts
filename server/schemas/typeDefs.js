// Import the gql tagged template function
const { gql } = require('apollo-server-express');

// Create our typeDefs
const typeDefs = gql`
    type Query {
        helloWorld: String
    }
`;

// Export the typeDefs
module.exports = typeDefs;