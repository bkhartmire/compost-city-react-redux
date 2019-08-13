const defaultState = {
  currentUser: null, //name, email,
  loading: false,
  view: "welcome",
  userType: null //receive or share
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: true };
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
    default:
      return state;
  }
};

export default reducer;
