import axios from "axios";

export function loginUser(data) {
  return function(dispatch) {
    return (async () => {
      dispatch({ type: "LOADING" });
      const user = await axios.get(`/api/users/${data.email}`);
      const resp = user.data.pop();
      if (resp.password === data.password)
        dispatch(setUser({ username: resp.username, email: resp.email }));
    })();
  };
}

export function signupUser(data) {
  return function(dispatch) {
    return async () => {
      dispatch({ type: "LOADING" });
      const user = await axios.post("/api/users", data);
      dispatch(setUser(user));
    };
  };
}

function setUser(user) {
  return {
    type: "SET_USER",
    payload: user
  };
}

export function submitZipcode(data) {
  debugger;
}
