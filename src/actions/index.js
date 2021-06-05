import { auth, provider } from "../firebase.js";
import { SET_USER } from "./actionType";

export const setUser = (payload) => ({
  type: SET_USER,
  user: payload,
});

export function signInAPI() {
  return (dispatch) => {
    auth
      .signInWithPopup(provider)
      .then((payload) => {
        console.log(payload.user);
        // dispatch(setUser(payload.user));
      })
      .catch((error) => console.log(error.message));
  };
}
