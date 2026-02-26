export const PROFILE_FETCH_SUCCESS = "PROFILE_FETCH_SUCCESS"
export const PROFILE_FETCH_FAILURE = "PROFILE_FETCH_FAILURE"
export const PROFILE_CLEAR = "PROFILE_CLEAR"
export const PROFILE_FETCH_REQUEST = "PROFILE_FETCH_REQUEST"

/* export const getUsers = () => async (dispatch) => {
  dispatch({ type: PROFILE_FETCH_REQUEST })
  fetch("https://striveschool-api.herokuapp.com/api/profile/", {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_PROFILE_TOKEN}`,
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json()
      } else {
        throw new Error("Error fetching profiles")
      }
    })
    .then((data) => {
      dispatch({
        type: PROFILE_FETCH_SUCCESS,
        payload: data[26]._id,
      })
    })
    .catch((err) => {
      console.error(err)
      dispatch({
        type: PROFILE_FETCH_FAILURE,
        payload: err.message,
      })
    })
} */
