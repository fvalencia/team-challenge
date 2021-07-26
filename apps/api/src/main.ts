import { ApolloServer } from "apollo-server";
import {
  typeDefs as ScalarsTypeDefs,
  resolvers as ScalarsResolvers
} from "graphql-scalars";
import { mergeTypeDefs } from "graphql-tools";
import Resolvers from "./app/resolvers";
import Queries from './graphql-schemas/queries.graphql';
import Mutations from './graphql-schemas/mutations.graphql';
import Types from './graphql-schemas/types.graphql';

const typeDefs = mergeTypeDefs([mergeTypeDefs([Queries, Mutations, Types]), mergeTypeDefs(ScalarsTypeDefs)]);
const server = new ApolloServer({
  typeDefs,
  resolvers: {
    ...ScalarsResolvers,
    ...Resolvers
  }
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
