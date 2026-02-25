export const FETCH_EXPERIENCES_REQUEST = "FETCH_EXPERIENCES_REQUEST"
export const FETCH_EXPERIENCES_SUCCESS = "FETCH_EXPERIENCES_SUCCESS"
export const FETCH_EXPERIENCES_FAILURE = "FETCH_EXPERIENCES_FAILURE"

export const fetchExperiences = () => async (dispatch) => {
  const token = localStorage.getItem("token")

  // usando ID fisso per avere esperienze nell profilo
  dispatch({ type: FETCH_EXPERIENCES_REQUEST })
  fetch(
    `https://striveschool-api.herokuapp.com/api/profile/6552122bc55e7e0018f83c2c/experiences`,
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
      console.log(data)
    })

    .catch((error) => {
      console.error(error)
      dispatch({
        type: FETCH_EXPERIENCES_FAILURE,
        payload: error.message,
      })
    })
}
