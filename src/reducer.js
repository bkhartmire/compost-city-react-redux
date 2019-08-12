const defaultState = {
  currentUser: null, //name, email, zipcode
  loading: false,
  view: "welcome"
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
    default:
      return state;
  }
};

export default reducer;
