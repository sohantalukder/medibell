import {createSlice} from '@reduxjs/toolkit';
import sliceName from '@states/sliceName';

interface InitialStateProps {}

const initialState: InitialStateProps = {};

const authSlice = createSlice({
  name: sliceName.authSlice,
  initialState: initialState,
  reducers: {},
});

export default authSlice.reducer;
