import { configureStore } from '@reduxjs/toolkit';
import toggleBarsReducer from './features/navbar-slice';
import updateProfileReducer from './features/profile-slice'
const store = configureStore({
  reducer: {
    toggleBarsReducer,
    updateProfileReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
