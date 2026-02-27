import {
  FETCH_EXPERIENCES_FAILURE,
  FETCH_EXPERIENCES_REQUEST,
  FETCH_EXPERIENCES_SUCCESS,
  ADD_EXPERIENCE,
} from "../actions/experienceActions";

const initialState = {
  list: [],
  loading: false,
  error: null,
};

const experiencesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EXPERIENCES_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_EXPERIENCES_SUCCESS:
      return { ...state, loading: false, list: action.payload };
    case FETCH_EXPERIENCES_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case ADD_EXPERIENCE:
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    default:
      return state;
  }
};

export default experiencesReducer;
