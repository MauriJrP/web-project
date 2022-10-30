import { IAuth, IUser } from "../../types";

type AuthAction = 
  | {type: 'login', payload: IUser} 
  | {type: 'logout'}
  | {type: 'signup', payload: IUser}
  | {type: 'updateUser', payload: {name: string, email: string, pwd: string}}

export const AuthReducer = (state: IAuth, action: AuthAction ) => {
  switch (action.type) {
    case 'login':
      return {...state, loggedIn: true, user: action.payload};
    case 'logout':
      return {loggedIn: false};
    case 'updateUser':
      // console.log("aqui")
      console.log({...state, user: {...state.user, ...action.payload}});
      // return state;
      return {...state, user: {...state.user as IUser, ...action.payload}}
    default:
      return state;
  }
}