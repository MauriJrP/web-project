import { IAuth, IProduct, IComment } from "../types"

export interface ICredentials {
  email: string,
  pwd: string
}

export interface INewUser {
  firstName: string,
  lastName: string,
  email: string,
  pwd: string,
}

export interface AuthContextProps {
  auth: IAuth,
  login: (user: ICredentials) => Promise<string>,
  logout: () => void,
  signup: (user: INewUser) => Promise<string>,
  updateUser: (name: string, email: string, pwd: string) => Promise<void>,
}

export interface ProductContextProps {
  product: IProduct;
  comments: IComment[];
  loadProduct: (idProduct: string) => Promise<void>;
  createComment: (rating: number, comment: string, idUser: number, idProduct: number) => Promise<void>;
  deleteComment: (idComment: number, idProduct: number) => Promise<void>;
}