export const TOGGLE_POST_EXPANDED = "postUi/togglePostExpanded";
export const SET_POST_EXPANDED = "postUi/setPostExpanded";
export const COLLAPSE_ALL_POSTS = "postUi/collapseAllPosts";
export const POST = "POST";

export const togglePostExpanded = (postId) => ({
  type: TOGGLE_POST_EXPANDED,
  payload: postId,
});

export const setPostExpanded = (postId, value) => ({
  type: SET_POST_EXPANDED,
  payload: { postId, value },
});

export const collapseAllPosts = () => ({
  type: COLLAPSE_ALL_POSTS,
});
