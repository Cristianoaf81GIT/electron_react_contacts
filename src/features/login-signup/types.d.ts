export interface LoginFormData {
  "login-fullname"?: string;
  "login-email": string;
  "login-password": string;
}

export interface SignUpData {
  fullName: string;
  email: string;
  password: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface User extends SignUpFormData {
  id: number;
  createdAt: string;
  updatedAt: string;
}

