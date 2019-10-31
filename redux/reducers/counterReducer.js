// Initial State
const initialState = {
    counter: 0,
  };
  
// Reducers (Modifies The State And Returns A New State)
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    // Increase Counter
    case 'INCREASE_COUNTER': {
      return {
        // State
        ...state,
        // Redux Store
        counter: state.counter + 1,
      }
    }

    // Decrease Counter
    case 'DECREASE_COUNTER': {
      return {
        // State
        ...state,
        // Redux Store
        counter: state.counter - 1,
      }
    }

    // Default
    default: {
      return state;
    }
  }
};

// Exports
export default counterReducer;