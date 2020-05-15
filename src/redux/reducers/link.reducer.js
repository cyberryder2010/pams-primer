const linkReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_LINK":
      return action.payload;
    default:
      return state;
  }
};

export default linkReducer;
