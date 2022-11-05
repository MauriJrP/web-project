export interface IUser {
    idUser: number;
    firstName: string;
    lastName: string;
    email: string;
    pwd: string;
    address: string;
    role: string;
  }

export interface IAuth {
    loggedIn: boolean;
    user?: IUser;
  }

export interface IUserComment {
idUser: number;
name: string;
// photo: string;
}

export interface IComment {
idComment: number;
user: IUserComment;
date: string;
rating: number;
comment: string;
}
  
export interface IProduct {
    idProduct: number;
    nameProduct: string;
    price: number;
    type: string;
    stock: number;
    rating: number;
} 