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
        `/api/zipcodes/${data.zipcode}/${data.radius}`
      );
      dispatch({
        type: "SET_QUERY",
        payload: { zipcode: data.zipcode, radius: data.radius }
      });
      const result = [];
      data.allPosts.forEach(post => {
        for (const item of zipcodes.data) {
          if (item.zip_code === post.zip_code)
            result.push({ ...post, distance: item.distance.toFixed(2) });
        }
      });
      dispatch({ type: "LIST_RESULTS", payload: result });
    })();
  };
}

export function submitPost(data) {
  const body = {
    user_name: data.username,
    user_email: data.email,
    zip_code: data.zipcode,
    food_scraps: data.foodScraps,
    human_or_animal_waste: data.waste,
    bokashi: data.bokashi
  };
  return function(dispatch) {
    return (async () => {
      dispatch({ type: "LOADING" });
      const newPost = await axios.post("/api/posts", body);
      dispatch({ type: "SUBMIT_POST", payload: newPost });
    })();
  };
}
