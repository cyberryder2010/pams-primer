const glossaryReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_TERMS":
      return action.payload;
    default:
      return state;
  }
};

export default glossaryReducer;
