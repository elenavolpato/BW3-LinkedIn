export const FETCH_EXPERIENCES_REQUEST = "FETCH_EXPERIENCES_REQUEST"
export const FETCH_EXPERIENCES_SUCCESS = "FETCH_EXPERIENCES_SUCCESS"
export const FETCH_EXPERIENCES_FAILURE = "FETCH_EXPERIENCES_FAILURE"

export const fetchExperiences =
  (userId) => async (dispatch /* , getState */) => {
    const token = localStorage.getItem("token")
    //console.log(getState())
    dispatch({ type: FETCH_EXPERIENCES_REQUEST })
    fetch(
      `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error("Error fetching jobs")
        }
      })
      .then((data) => {
        dispatch({
          type: FETCH_EXPERIENCES_SUCCESS,
          payload: data,
        })
      })
      .catch((error) => {
        console.error(error)
        dispatch({
          type: FETCH_EXPERIENCES_FAILURE,
          payload: error.message,
        })
      })
  }
