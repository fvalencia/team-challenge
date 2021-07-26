import { IUser, UserModel } from "../models/UserModel";

const mockedData: IUser[] = [
  {
    id: "1",
    email: "pepe@company.com",
    name: "Pepe Sanchez",
    dateOfBirth: new Date("1990"),
    department: "it",
    status: "active"
  },
  {
    id: "2",
    email: "juan@company.com",
    name: "Juan Valencia",
    dateOfBirth: new Date("1980"),
    department: "management",
    status: "inactive"
  },
  {
    id: "3",
    email: "julia@company.com",
    name: "Julia Monsalve",
    dateOfBirth: new Date("1970"),
    department: "services",
    status: "freezed"
  }
];

export class UserDal {
  private users: IUser[];
  constructor() {
    this.users = [...mockedData]
  }

  find() {
    return this.users.map((row) => new UserModel(row));
  }

  delete(id: IUser['id']): boolean {
    if (this.users.some(row => row.id === id)) {
      this.users = this.users.filter(row => row.id !== id);
      return true;
    }
    return false;
  }
}
