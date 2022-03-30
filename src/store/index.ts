import { createStore } from 'redux';
import rootReducer from './reducers';


// TODO - enable redux dev tools
//

const initialState = {};


export const store = createStore(
  rootReducer,
  initialState
); 
