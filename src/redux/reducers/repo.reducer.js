const repoReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_REPO":
      return action.payload;
    default:
      return state;
  }
};

export default repoReducer;
