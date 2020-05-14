const referenceTag = (state = [], action) => {
  switch (action.type) {
    case "SET_REFERENCE_TAG":
      return action.payload;
    default:
      return state;
  }
};

export default referenceTag;
