import { UserResolver } from "./UserResolver";

const userResolver = new UserResolver();

export default {
  Query: {
    getUsers: userResolver.getUsers.bind(userResolver)
  },
  Mutation: {
    deleteUser: userResolver.deleteUser.bind(userResolver)
  }
};
