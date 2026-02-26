import { configureStore } from "@reduxjs/toolkit"
import postUiReducer from "./reducers/postUiReducer"
import authReducer from "./reducers/authReducer"
import profileReducer from "./reducers/profileReducer"
import experiencesReducer from "./reducers/experiencesReducer"

export const store = configureStore({
  reducer: {
    postUi: postUiReducer,
    auth: authReducer,
    profile: profileReducer,
    experiences: experiencesReducer,
  },
})
