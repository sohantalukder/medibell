import {COMMON_REDUCER, COMMON_STATE} from '@entity-models/redux/redux.types';
import {createSlice} from '@reduxjs/toolkit';
import commonStates from '@states/commonState.state';
import sliceName from '@states/sliceName';
import {getChatsList} from './chats.thunk';
import commonReducers from '@states/commonReducer.state';
import {IChat} from '@modules/chats/interface';

const initialState: COMMON_STATE<IChat> = {
  ...commonStates,
};

const chatsSlice = createSlice({
  name: sliceName.chatsSlice,
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(getChatsList.pending, commonReducers.isGetting)
      .addCase(getChatsList.fulfilled, (state, payload) =>
        commonReducers.isGettingSuccess(state, payload),
      )
      .addCase(getChatsList.rejected, commonReducers.isGettingError);
  },
  reducers: {
    clearAction: (state: COMMON_STATE<IChat>) => {
      for (const property in initialState) {
        (state as any)[property] = (initialState as any)[property];
      }
    },
  },
});

export const {clearAction}: COMMON_REDUCER<IChat> = chatsSlice.actions;

export default chatsSlice.reducer;
