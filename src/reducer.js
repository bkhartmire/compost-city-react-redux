const getView = () => {
  const lastView = window.localStorage.getItem("view");
  return lastView ? lastView : "welcome";
};

const defaultState = {
  currentUser: JSON.parse(window.localStorage.getItem("currentUser")),
  loading: false,
  view: getView(),
  postResults: [],
  posts: [],
  query: null,
  showModal: false
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
    case "VIEW_SELECTION":
      window.localStorage.setItem("view", "selection");
      return { ...state, view: "selection" };
    case "SET_USER":
      window.localStorage.setItem(
        "currentUser",
        JSON.stringify(action.payload)
      );
      window.localStorage.setItem("view", "selection");
      return {
        ...state,
        currentUser: action.payload,
        loading: false,
        view: "selection"
      };
    case "SET_USER_VIEW":
      window.localStorage.setItem("view", action.payload);
      return { ...state, view: action.payload };
    case "LOGOUT_USER":
      window.localStorage.clear();
      return { ...defaultState, currentUser: null, view: "welcome" };
    case "GO_BACK":
      window.localStorage.setItem("view", "selection");
      return { ...state, view: "selection", showModal: false };
    case "GO_HOME":
      window.localStorage.setItem("view", "welcome");
      return { ...state, view: "welcome", showModal: false };
    case "SET_QUERY":
      return { ...state, query: action.payload };
    case "LIST_RESULTS":
      return { ...state, postResults: action.payload, loading: false };
    case "SUBMIT_POST":
      return {
        ...state,
        posts: [...state.posts, JSON.parse(action.payload.config.data)],
        loading: false,
        showModal: true
      };
    case "CLOSE_MODAL": {
      return { ...state, showModal: false };
    }
    default:
      return state;
  }
};

export default reducer;
