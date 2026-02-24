import { configureStore } from "@reduxjs/toolkit";
import postUiReducer from "./reducers/postUiReducer";
import authReducer from "./reducers/authReducer";

export const store = configureStore({
  reducer: {
    postUi: postUiReducer,
    auth: authReducer,
  },
});
