const reference = (state = [], action) => {
  switch (action.type) {
    case "SET_REFERENCE":
      return action.payload;
    default:
      return state;
  }
};

export default reference;
