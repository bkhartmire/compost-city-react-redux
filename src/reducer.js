const defaultState = {
  // currentUser: null,
  currentUser: {
    email: "user1@email.com",
    username: "Jane"
  }, //should initialize null
  loading: false,
  view: "home", //should initialize welcome
  userType: null, //receive or share
  postResults: [], //{zip_code, distance, city, state}
  posts: [],
  query: null //{radius, zip code}
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: true };
    case "SET_POSTS":
      return { ...state, posts: action.payload, loading: false };
    case "VIEW_LOGIN_FORM":
      return { ...state, view: "loginForm" };
    case "VIEW_SIGNUP_FORM":
      return { ...state, view: "signupForm" };
    case "SET_USER":
      return {
        ...state,
        currentUser: action.payload,
        loading: false,
        view: "home"
      };
    case "SET_USER_TYPE":
      return { ...state, userType: action.payload };
    case "SET_QUERY":
      return { ...state, query: action.payload };
    case "LIST_RESULTS":
      return { ...state, postResults: action.payload, loading: false };
    default:
      return state;
  }
};

export default reducer;
