import { SET_USER_TOKEN } from '../types';

export type TUserLoginAction = {
  type: string,
  payload?: {
    token: string;
    refreshToken: string;
    userName: string;
  }
}

export function userLoginAction(token: string, refreshToken: string, userName: string): TUserLoginAction {
 return {
  type: SET_USER_TOKEN,
  payload: {
    token,
    refreshToken,
    userName
  }
 }
}


