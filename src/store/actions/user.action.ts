import { SET_USER_TOKEN } from '../types';

export type TUserLoginAction = {
  type: string,
  payload?: {
    token: string;
    refreshToken: string;
  }
}

export function userLoginAction(token: string, refreshToken: string): TUserLoginAction {
 return {
  type: SET_USER_TOKEN,
  payload: {
    token,
    refreshToken
  }
 }
}


