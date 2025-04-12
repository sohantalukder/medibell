import {combineReducers} from '@reduxjs/toolkit';
import sliceName from '@states/sliceName';
import authSlice from '@states/features/auth/auth.slice';
const rootReducer = combineReducers({
  [sliceName.authSlice]: authSlice,
});
export default rootReducer;
