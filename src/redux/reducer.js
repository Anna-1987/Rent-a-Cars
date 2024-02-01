import { combineReducers } from 'redux';
// import storage from 'redux-persist/lib/storage';
// import { persistReducer } from 'redux-persist';
import { carsReducer } from './catalog/carsSlice';

// const authPersistConfig = {
//   key: 'auth',
//   storage,
// };

export const reducer = combineReducers({
  // auth: persistReducer(authPersistConfig, authReducer),
  cars: carsReducer,
});
