import { combineReducers } from 'redux';
import { TUserLoginState, userLoginReducer } from '../reducers/user.reducer';

export interface ICombineState {
 userLogin: TUserLoginState, 
}


export default combineReducers({
  userLogin: userLoginReducer,
});




