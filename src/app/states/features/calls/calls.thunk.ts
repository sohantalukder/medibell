import {createAsyncThunk} from '@reduxjs/toolkit';
import CallsServices from '@services/features/calls/Calls.service';
import {GETTING_PAYLOAD} from '@services/types';
import sliceName from '@states/sliceName';

export const getCallsList = createAsyncThunk(
  `${sliceName.callsSlice}/list`,
  async (obj?: GETTING_PAYLOAD) => {
    return CallsServices.getList(obj);
  },
);
