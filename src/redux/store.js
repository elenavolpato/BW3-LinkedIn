import { configureStore } from "@reduxjs/toolkit";
import postUiReducer from "./reducers/postUiReducer";

export const store = configureStore({
    reducer: {
        postUi: postUiReducer,
    },
});