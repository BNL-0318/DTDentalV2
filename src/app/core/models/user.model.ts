export interface UserLogin {
  configs: string;
  message: string;
  refreshToken: string;
  succeeded: boolean;
  token: string;
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
