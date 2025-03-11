import {configureStore} from '@reduxjs/toolkit';
import rootReducer from '@states/rootReducer.state';

const configStore = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}),
});
export default configStore;
