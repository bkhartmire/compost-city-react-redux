const getView = () => {
  const lastView = window.localStorage.getItem("view");
  return lastView ? lastView : "welcome";
};

const defaultState = {
  currentUser: JSON.parse(window.localStorage.getItem("currentUser")),
  loading: false,
  view: getView(),
  userType: window.localStorage.getItem("userType"),
  postResults: [],
  posts: [],
  query: null
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: true };
    case "SET_POSTS":
      return { ...state, posts: action.payload, loading: false };
    case "VIEW_LOGIN_FORM":
      window.localStorage.setItem("view", "loginForm");
      return { ...state, view: "loginForm" };
    case "VIEW_SIGNUP_FORM":
      window.localStorage.setItem("view", "signupForm");
      return { ...state, view: "signupForm" };
    case "SET_USER":
      window.localStorage.setItem(
        "currentUser",
        JSON.stringify(action.payload)
      );
      window.localStorage.setItem("view", "home");
      return {
        ...state,
        currentUser: action.payload,
        loading: false,
        view: "home"
      };
    case "SET_USER_TYPE":
      window.localStorage.setItem("userType", action.payload);
      return { ...state, userType: action.payload };
    case "LOG_OUT":
      window.localStorage.clear();
      return { ...defaultState, currentUser: null };
    case "SET_QUERY":
      return { ...state, query: action.payload };
    case "LIST_RESULTS":
      return { ...state, postResults: action.payload, loading: false };
    default:
      return state;
  }
};

export default reducer;
