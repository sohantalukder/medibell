import {createAsyncThunk} from '@reduxjs/toolkit';
import sliceName from '@states/sliceName';

const login = createAsyncThunk(`${sliceName.authSlice}/login`, async () => {
  return '';
});

export {login};
