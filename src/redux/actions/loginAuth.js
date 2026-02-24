export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT = "LOGOUT";

// Credenziali fake + token associati (cambia con i tuoi reali!)
const fakeCredentials = {
  epiclinkedin: {
    password: "LinkedinEpicode",
    token:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTljMGRkNDBiYzFkZTAwMTU3N2I3OWIiLCJpYXQiOjE3NzE4NjcxNTcsImV4cCI6MTc3MzA3Njc1N30.bODfIBRyov_8NGZVjablTa3L10_rysXPb1zMiV0jp6w",
  },
  lucaverdi: {
    password: "test456",
    token:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTljMTE1ODBiYzFkZTAwMTU3N2I3OWQiLCJpYXQiOjE3NzE4MzU3MzYsImV4cCI6MTc3MzA0NTMzNn0.sqNA4zaClXn_qt6yLcLVvYsT1sOeGx_2BmLmdLBSF40",
  },
};

export const loginUser = (username, password) => (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });

  // Simulazione chiamata API con timeout
  setTimeout(() => {
    const user = fakeCredentials[username.trim().toLowerCase()];

    if (user && user.password === password) {
      // Login "riuscito"
      localStorage.setItem("token", user.token);

      dispatch({
        type: LOGIN_SUCCESS,
        payload: user.token,
      });

      console.log(`Login simulato con successo per ${username}`);
    } else {
      dispatch({
        type: LOGIN_FAILURE,
        payload: "Username o password errati",
      });
    }
  }, 1000); // delay per simulare richiesta
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("token");
  dispatch({ type: LOGOUT });
};
