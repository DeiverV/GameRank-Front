export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

export interface TokenPayload {
  username: string;
  email: string;
  id: string;
  name: string;
  role: string;
}

export interface RegisterPayload {
  email: string;
  password: string;
  name: string;
  username: string;
}
