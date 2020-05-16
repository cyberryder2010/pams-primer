const newRepo = (state = {}, action) => {
  switch (action.type) {
    case "SET_NEW_REPO":
      return action.payload;
    default:
      return state;
  }
};

export default newRepo;
