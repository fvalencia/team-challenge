export interface IUser {
  id: string;
  name: string;
  email: string;
  dateOfBirth: Date;
  department: string;
  status: string;
}

export class UserModel implements IUser {
  constructor(user: IUser) {
    this.id = user.id;
    this.name = user.name;
    this.dateOfBirth = user.dateOfBirth;
    this.department = user.department;
    this.status = user.status;
  }

  id: string;
  name: string;
  email: string;
  dateOfBirth: Date;
  department: string;
  status: string;
}
