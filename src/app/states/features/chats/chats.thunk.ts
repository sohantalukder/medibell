import {createAsyncThunk} from '@reduxjs/toolkit';
import ChatsServices from '@services/features/chats/Chats.service';
import {GETTING_PAYLOAD} from '@services/types';
import sliceName from '@states/sliceName';

export const getChatsList = createAsyncThunk(
  `${sliceName.chatsSlice}/list`,
  async (obj?: GETTING_PAYLOAD) => {
    return ChatsServices.getList(obj);
  },
);
