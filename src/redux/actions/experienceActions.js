import { getMonthNumber } from "../../components/Utils";

export const FETCH_EXPERIENCES_REQUEST = "FETCH_EXPERIENCES_REQUEST";
export const FETCH_EXPERIENCES_SUCCESS = "FETCH_EXPERIENCES_SUCCESS";
export const FETCH_EXPERIENCES_FAILURE = "FETCH_EXPERIENCES_FAILURE";

export const ADD_EXPERIENCE_SUCCESS = "ADD_EXPERIENCE_SUCCESS";
export const ADD_EXPERIENCE_FAILURE = "ADD_EXPERIENCE_FAILURE";

export const UPDATE_EXPERIENCE_FAILURE = " UPDATE_EXPERIENCE_FAILURE";
export const UPDATE_EXPERIENCE_SUCCESS = " UPDATE_EXPERIENCE_SUCCESS";

export const DELETE_EXPERIENCE_SUCCESS = "DELETE_EXPERIENCE_SUCCESS";
export const DELETE_EXPERIENCE_FAILURE = "DELETE_EXPERIENCE_FAILURE";

export const fetchExperiences = (userId) => async (dispatch) => {
  dispatch({ type: FETCH_EXPERIENCES_REQUEST });
  fetch(
    `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`,
    {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_PROFILE_TOKEN}`,
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
      console.log("experiences", data);
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
  return (dispatch) => {
    const startDate = new Date(
      `${formData.annoInizio}-${String(getMonthNumber(formData.meseInizio) + 1).padStart(2, "0")}-01`,
    ).toISOString();

    const payload = {
      area: formData.area,
      company: formData.company,
      description: formData.description,
      role: formData.role,
      startDate,
      user: userId,
      username: "",
      image:
        "https://epicode-testapi-bucket.s3.eu-south-1.amazonaws.com/1699897520575-epicodeschool_logo.jpg",
    };
    fetch(
      `https://striveschool-api.herokuapp.com/api/profile/${payload.user}/experiences`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
        },
        body: JSON.stringify(payload),
      },
    )
      .then((res) => {
        if (!res.ok) throw new Error("POST error");
        return res.json();
      })
      .then((data) => {
        dispatch({ type: ADD_EXPERIENCE_SUCCESS, payload: data });
      })
      .catch((err) => console.error(err));
  };
};

export const updateExperience = (payload, userId, expId) => {
  return (dispatch) => {
    fetch(
      `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${expId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
        },
        body: JSON.stringify(payload),
      },
    )
      .then((res) => {
        if (!res.ok) throw new Error(`PUT error: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        dispatch({ type: UPDATE_EXPERIENCE_SUCCESS, payload: data });
      })
      .catch((error) => {
        console.error(error);
        dispatch({
          type: UPDATE_EXPERIENCE_FAILURE,
          payload: error.message,
        });
      });
  };
};

export const deleteExperience = (userId, expId) => {
  return (dispatch) => {
    fetch(
      `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${expId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
        },
      },
    )
      .then((res) => {
        if (!res.ok) throw new Error("DELETE error");
        dispatch({ type: DELETE_EXPERIENCE_SUCCESS, payload: expId });
      })
      .catch((error) => {
        console.error(error);
        dispatch({
          type: DELETE_EXPERIENCE_FAILURE,
          payload: error.message,
        });
      });
  };
};
