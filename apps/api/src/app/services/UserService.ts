import { UserDal } from "../dals/UserDal";
import { IUser } from "../models/UserModel";

export class UserService {
  private userDal: UserDal;

  constructor() {
    this.userDal = new UserDal();
  }

  getUsers() {
    return this.userDal.find();
  }

  deleteUser(id: IUser['id']) {
    return this.userDal.delete(id)
  }
}
