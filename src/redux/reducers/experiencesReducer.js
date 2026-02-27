import {
  FETCH_EXPERIENCES_FAILURE,
  FETCH_EXPERIENCES_REQUEST,
  FETCH_EXPERIENCES_SUCCESS,
  ADD_EXPERIENCE_SUCCESS,
  ADD_EXPERIENCE_FAILURE,
  UPDATE_EXPERIENCE_FAILURE,
  UPDATE_EXPERIENCE_SUCCESS,
  DELETE_EXPERIENCE_SUCCESS,
  DELETE_EXPERIENCE_FAILURE,
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
    case ADD_EXPERIENCE_SUCCESS:
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case ADD_EXPERIENCE_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case UPDATE_EXPERIENCE_SUCCESS:
      return {
        ...state,
        list: state.list.map((exp) =>
          exp._id === action.payload._id ? action.payload : exp,
        ),
      };
    case UPDATE_EXPERIENCE_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case DELETE_EXPERIENCE_SUCCESS:
      return {
        ...state,
        list: state.list.filter((exp) => exp._id !== action.payload),
      };
    case DELETE_EXPERIENCE_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default experiencesReducer;
