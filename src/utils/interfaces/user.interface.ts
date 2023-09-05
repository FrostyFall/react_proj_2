export interface IUser {
  id: number;
  email: string;
  login: string;
  firstName: string;
  lastName: string;
  isActive: boolean;
  roles: string[];
  dob: string;
  sex: string;
  password?: string;
}
