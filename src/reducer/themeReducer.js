export const initialState = {
  count: 0,
  isTheme: false,
};
const themeReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ISTHEME":
      return { ...state, isTheme: !state.isTheme };
    case "INCREMENT": {
      return {
        ...state,
        count: state.count + 1,
      };
    }
    case "DECREMENT": {
      return {
        ...state,
        count: state.count - 1,
      };
    }
    case "DECREMENTBY20": {
      return {
        ...state,
        count: state.count + payload,
      };
    }
    default:
      return state;
  }
};
export default themeReducer;
