const newReference = (state = {}, action) => {
  switch (action.type) {
    case "SET_NEW_REFERENCE":
      return action.payload;
    default:
      return state;
  }
};

export default newReference;
