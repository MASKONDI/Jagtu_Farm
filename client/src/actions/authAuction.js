import axios from "axios";
import { GET_ERRORS, SET_CURRENT_USER } from "./types";
import jwt_decode from "jwt-decode";

import setAuthToken from "../utils/setAuthToken";
// Register User
export const registerUser = (userData, history) => (dispatch) => {
  axios
    .post("/api/userRegistration/register", userData)
    .then((res) => history.push("/login"))
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

// Login - get User Token
export const loginUser = (userData) => (dispatch) => {
  axios
    .post("/api/userRegistration/login", userData)
    .then((res) => {
      //save to localStorage
      const { token } = res.data;
      //set Token to local storage
      localStorage.setItem("jwtToken", token);
      //set token to Auth header
      setAuthToken(token);
      //decode token to get user data
      const decoded = jwt_decode(token);
      //set Current User
      dispatch(setCurrentUser(decoded));
    })
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

//set Logged in user
export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};

//log user out
export const logoutUser = () => (dispatch) => {
  //Remove token from localStorage
  localStorage.removeItem("jwtToken");
  // Remove auth header fro future request
  setAuthToken(false);
  //set Current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};
