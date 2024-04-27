import axios from "axios";
import Swal from "sweetalert2";

// Constantes pour les actions de connexion
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const loginRequest = () => ({ type: LOGIN_REQUEST });//connexion en cours
export const loginSuccess = () => ({ type: LOGIN_SUCCESS });// connexion réussi
export const loginFailure = (error) => ({ type: LOGIN_FAILURE, payload: error }); // erreur 

export const loginUser = (email, password, navigate, rememberMe) => {
  return async (dispatch) => {
    dispatch(loginRequest());

    try {
      const response = await axios.post(
        "http://localhost:3001/api/v1/user/login",
        { email, password }
      );

      if (response.status === 200) {
        const token = response.data.body.token;
        rememberMe ? localStorage.setItem("token", token) : sessionStorage.setItem("token", token);
        navigate("/account");
        dispatch(loginSuccess());
      } else {
        localStorage.removeItem("token");
        sessionStorage.removeItem("token");
      }
    } catch (error) {
      dispatch(loginFailure("Identifiants incorrects"));
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Identifiants incorrects",
      });

      localStorage.removeItem("token");
      sessionStorage.removeItem("token");
    }
  };
};

