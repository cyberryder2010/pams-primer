const tipHintTrickReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_THT":
      return action.payload;
    default:
      return state;
  }
};

export default tipHintTrickReducer;
