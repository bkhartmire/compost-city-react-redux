import axios from "axios";

export function fetchPosts() {
  return function(dispatch) {
    return (async () => {
      dispatch({ type: "LOADING" });
      const posts = await axios.get("/api/posts");
      dispatch({ type: "SET_POSTS", payload: posts.data });
    })();
  };
}

export function loginUser(data) {
  return function(dispatch) {
    return (async () => {
      dispatch({ type: "LOADING" });
      const user = await axios.get(`/api/users/${data.email}`);
      const resp = user.data.pop();
      if (resp.password === data.password)
        dispatch({
          type: "SET_USER",
          payload: { username: resp.username, email: resp.email }
        });
    })();
  };
}

export function signupUser(data) {
  return function(dispatch) {
    return async () => {
      dispatch({ type: "LOADING" });
      const user = await axios.post("/api/users", data);
      dispatch({
        type: "SET_USER",
        payload: user
      });
    };
  };
}

export function submitZipcode(data) {
  return function(dispatch) {
    return (async () => {
      dispatch({ type: "LOADING" });
      const zipcodes = await axios.get(
        `https://cors-anywhere.herokuapp.com/zipcodeapi.com/rest/aSzOpqofvOig3snnwxRBZ7JTPOJSstDBgWp9Cp8Qgu8XvXHSvf1mdLntzkezoh7C/radius.json/${
          data.zipcode
        }/${data.radius}/mile`
      );
      dispatch({
        type: "SET_QUERY",
        payload: { zipcode: data.zipcode, radius: data.radius }
      });
      const result = [];
      data.allPosts.forEach(post => {
        for (const item of zipcodes.data.zip_codes) {
          if (item.zip_code === post.zip_code)
            result.push({ ...post, distance: item.distance.toFixed(2) });
        }
      });
      dispatch({ type: "LIST_RESULTS", payload: result });
    })();
  };
}
