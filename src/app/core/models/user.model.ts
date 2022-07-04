export interface UserLogin {
  configs: object | null;
  message: string;
  refreshToken: string |null;
  succeeded: boolean;
  token: string |null;
  user: User | null;
}
export interface User {
  avatar: string;
  companyId: string;
  email: string;
  id: string;
  name: string;
  phone: string;
  userName: string;
}
export interface Account {
  userName: string;
  password: string;
  rememberMe: boolean;
}
