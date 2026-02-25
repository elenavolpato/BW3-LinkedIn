import { PROFILE_CLEAR, PROFILE_FETCH_FAILURE, PROFILE_FETCH_SUCCESS } from "../actions/profileActions";

const initialState = {
  profile: null,
  loading: false,
  error: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE_FETCH_SUCCESS:
      return {
        ...state,
        profile: action.payload,
        loading: false,
        error: null,
      };

    case PROFILE_FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case PROFILE_CLEAR:
      return { ...initialState };

    default:
      return state;
  }
};

export default profileReducer;
