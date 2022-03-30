import { SET_USER_TOKEN } from '../types';
import { TUserLoginAction } from '../actions/user.action';

export type TUserLoginState = {
  token: string;
  refreshToken: string;
}

const userLoginInitialState: TUserLoginState =  {
  token: '',
  refreshToken: '',
};

export function userLoginReducer(
  state = userLoginInitialState,
  action: TUserLoginAction = { type: '' },
): TUserLoginState {
  const { payload, type } = action;

  if (type === SET_USER_TOKEN) {
     return {
       ...state,
       ...payload
     }
   }

   return state;    
}
