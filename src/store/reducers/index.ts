import { combineReducers } from 'redux';
import { TUserLoginState, userLoginReducer } from '../reducers/user.reducer';

export interface TCombineState {
 userLogin: TUserLoginState, 
};


export default combineReducers({
  userLogin: userLoginReducer,
});




