const newLink = (state = {}, action) => {
  switch (action.type) {
    case "SET_NEW_LINK":
      return action.payload;
    default:
      return state;
  }
};

export default newLink;
