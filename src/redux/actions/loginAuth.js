import { PROFILE_FETCH_FAILURE, PROFILE_FETCH_SUCCESS } from "./profileActions";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT = "LOGOUT";

// Credenziali fake + token associati (cambia con i tuoi reali!)
const fakeCredentials = {
  epiclinkedin: {
    password: "LinkedinEpicode",
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTljMGRkNDBiYzFkZTAwMTU3N2I3OWIiLCJpYXQiOjE3NzE4NjcxNTcsImV4cCI6MTc3MzA3Njc1N30.bODfIBRyov_8NGZVjablTa3L10_rysXPb1zMiV0jp6w",
  },
  lucaverdi: {
    password: "test456",
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTljMTE1ODBiYzFkZTAwMTU3N2I3OWQiLCJpYXQiOjE3NzE4MzU3MzYsImV4cCI6MTc3MzA0NTMzNn0.sqNA4zaClXn_qt6yLcLVvYsT1sOeGx_2BmLmdLBSF40",
  },
};

export const loginUser = (username, password) => (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });

  // Simulazione chiamata API con timeout
  setTimeout(() => {
    console.log("Username inserito:", username.trim().toLowerCase()); // ← aggiungi questo
    console.log("Password inserita:", password);
    const user = fakeCredentials[username.trim().toLowerCase()];
    console.log("User trovato nei fakeCredentials?", !!user);

    if (user && user.password === password) {
      console.log("LOGIN RIUSCITO - entro nell'if");
      // Login "riuscito"
      localStorage.setItem("token", user.token);

      dispatch({
        type: LOGIN_SUCCESS,
        payload: user.token,
      });

      console.log(`Login simulato con successo per ${username}`);

      fetch("https://striveschool-api.herokuapp.com/api/profile/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`, // usa il token appena salvato
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          console.log("Risposta status:", res.status);
          if (!res.ok) {
            throw new Error(`Errore ${res.status} nel caricamento profilo`);
          }
          return res.json();
        })
        .then((profileData) => {
          console.log("Profilo ricevuto:", profileData);
          // Salva il profilo nel Redux store
          dispatch({
            type: PROFILE_FETCH_SUCCESS, // ← cambia con la tua action type reale
            payload: profileData,
          });
          console.log("Profilo caricato e salvato in Redux:", profileData.name, profileData.surname);
        })
        .catch((err) => {
          console.error("Fetch profilo FALLITA:", err.message);
          console.error("Errore fetch profilo dopo login:", err);
          // Opzionale: dispatch un errore specifico per il profilo
          dispatch({
            type: PROFILE_FETCH_FAILURE,
            payload: err.message || "Impossibile caricare profilo",
          });
        });
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
