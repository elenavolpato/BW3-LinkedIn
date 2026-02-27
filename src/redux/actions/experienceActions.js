import { getMonthNumber } from "../../components/Utils";

export const FETCH_EXPERIENCES_REQUEST = "FETCH_EXPERIENCES_REQUEST";
export const FETCH_EXPERIENCES_SUCCESS = "FETCH_EXPERIENCES_SUCCESS";
export const FETCH_EXPERIENCES_FAILURE = "FETCH_EXPERIENCES_FAILURE";
export const ADD_EXPERIENCE = "ADD_EXPERIENCE";

export const fetchExperiences = (userId) => async (dispatch) => {
  const token = localStorage.getItem("token");
  //
  // usando ID fisso per avere esperienze nell profilo
  dispatch({ type: FETCH_EXPERIENCES_REQUEST });
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
        return res.json();
      } else {
        throw new Error("Error fetching jobs");
      }
    })
    .then((data) => {
      dispatch({
        type: FETCH_EXPERIENCES_SUCCESS,
        payload: data,
      });
      //console.log("experiences", data);
    })

    .catch((error) => {
      console.error(error);
      dispatch({
        type: FETCH_EXPERIENCES_FAILURE,
        payload: error.message,
      });
    });
};

export const addExperience = (formData, userId) => {
  const token = localStorage.getItem("token");

  return (dispatch) => {
    const startDate = new Date(
      `${formData.annoInizio}-${String(getMonthNumber(formData.meseInizio) + 1).padStart(2, "0")}-01`,
    ).toISOString();

    const payload = {
      area: formData.localita,
      company: formData.azienda,
      description: formData.descrizione,
      role: formData.titolo,
      startDate,
      user: userId,
      username: "FabioSimoDev",
      image:
        "https://epicode-testapi-bucket.s3.eu-south-1.amazonaws.com/1699897520575-epicodeschool_logo.jpg",
    };
    fetch(
      `https://striveschool-api.herokuapp.com/api/profile/${payload.user}/experiences`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      },
    )
      .then((res) => {
        if (!res.ok) throw new Error("POST error");
        return res.json();
      })
      .then((data) => {
        dispatch({ type: ADD_EXPERIENCE, payload: data });
      })
      .catch((err) => console.error(err));
  };
};
