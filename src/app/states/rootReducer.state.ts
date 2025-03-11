import {combineReducers} from '@reduxjs/toolkit';
import sliceName from '@states/sliceName';
import authSlice from '@states/features/auth/auth.slice';
import chatsSlice from '@states/features/chats/chats.slice';
import callsSlice from '@states/features/calls/calls.slice';
const rootReducer = combineReducers({
  [sliceName.authSlice]: authSlice,
  [sliceName.chatsSlice]: chatsSlice,
  [sliceName.callsSlice]: callsSlice,
});
export default rootReducer;
