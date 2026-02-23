import { createReducer } from "@reduxjs/toolkit";
import {
    TOGGLE_POST_EXPANDED,
    SET_POST_EXPANDED,
    COLLAPSE_ALL_POSTS,
} from "../actions/postUiActions";

const initialState = {
    expandedById: {},
};

const postUiReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(TOGGLE_POST_EXPANDED, (state, action) => {
            const postId = action.payload;
            state.expandedById[postId] = !state.expandedById[postId];
        })
        .addCase(SET_POST_EXPANDED, (state, action) => {
            const { postId, value } = action.payload;
            state.expandedById[postId] = !!value;
        })
        .addCase(COLLAPSE_ALL_POSTS, (state) => {
            state.expandedById = {};
        });
});

export default postUiReducer;