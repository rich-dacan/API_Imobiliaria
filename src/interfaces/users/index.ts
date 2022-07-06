export interface IUserRequest {
  nome: string;
  email: string;
  password: string;
  adm: boolean;
}

export interface IUserResponse {
  id: string;
  nome: string;
  email: string;
  password: string;
  adm: boolean;
  createdAt: Date;
  updatedAt: Date;
}
