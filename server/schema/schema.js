const graphql = require('graphql');
const { GraphQLSchema, GraphQLID } = graphql;

const RootQueryType = require('./types/root_query_type');
const mutation = require('./types/mutations');

module.exports = new GraphQLSchema({
  query: RootQueryType,
  mutation,
});
