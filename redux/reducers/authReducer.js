// Initial State
const initialState = {
  loggedIn: false,
};

// Reducers (Modifies The State And Returns A New State)
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    // Login
    case 'LOGIN': {
      return {
        // State
        ...state,
        // Redux Store
        loggedIn: action.trueFalse,
      }
    }
    // Default
    default: {
      return state;
    }
  }
};

// Exports
export default authReducer;