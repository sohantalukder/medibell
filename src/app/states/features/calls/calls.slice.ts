import {COMMON_REDUCER, COMMON_STATE} from '@entity-models/redux/redux.types';
import {createSlice} from '@reduxjs/toolkit';
import commonStates from '@states/commonState.state';
import sliceName from '@states/sliceName';
import {getCallsList} from './calls.thunk';
import commonReducers from '@states/commonReducer.state';
import {ICallEntry} from '@modules/calls/interface';

const initialState: COMMON_STATE<ICallEntry> = {
  ...commonStates,
};

const callsSlice = createSlice({
  name: sliceName.callsSlice,
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(getCallsList.pending, commonReducers.isGetting)
      .addCase(getCallsList.fulfilled, (state, payload) =>
        commonReducers.isGettingSuccess(state, payload),
      )
      .addCase(getCallsList.rejected, commonReducers.isGettingError);
  },
  reducers: {
    clearAction: (state: COMMON_STATE<ICallEntry>) => {
      for (const property in initialState) {
        (state as any)[property] = (initialState as any)[property];
      }
    },
  },
});

export const {clearAction}: COMMON_REDUCER<ICallEntry> = callsSlice.actions;

export default callsSlice.reducer;
