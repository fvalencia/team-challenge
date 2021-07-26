import { IUser } from "../models/UserModel";
import { UserService } from "../services/UserService";

export class UserResolver {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  getUsers() {
    return this.userService.getUsers();
  }

  deleteUser(context, args: { id: IUser['id'] }) {
    return this.userService.deleteUser(args.id);
  }
}
