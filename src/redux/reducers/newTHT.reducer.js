const newTHT = (state = {}, action) => {
  switch (action.type) {
    case "SET_NEW_THT":
      return action.payload;
    default:
      return state;
  }
};

export default newTHT;
