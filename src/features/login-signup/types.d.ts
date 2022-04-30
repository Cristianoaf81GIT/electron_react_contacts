export interface LoginFormData {
  "login-fullname"?: string;
  "login-email": string;
  "login-password": string;
}

export interface SignUpFormData {
  fullName: string;
  email: string;
  password: string;
}
export interface User extends SignUpFormData {
  id: number;
  createdAt: string;
  updatedAt: string;
}

