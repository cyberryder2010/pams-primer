import { combineReducers } from "redux";
import errors from "./errors.reducer";
import loginMode from "./loginMode.reducer";
import user from "./user.reducer";
import reference from "./reference.reducer";
import tag from "./tag.reducer";
import referenceTag from "./referenceTag.reducer";
import details from "./details.reducer";
import glossary from "./glossary.reducer";
import note from "./note.reducer";
import video from "./video.reducer";
import repo from "./repo.reducer";
import tipHintTrick from "./tht.reducer";
import image from "./image.reducer";

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  loginMode, // will have a value of 'login' or 'registration' to control which screen is shown
  user, // will have an id and username if someone is logged in
  reference, //all references in reducer
  tag, //all tags
  referenceTag, // combined reference and tags
  details, //combine all information for a reference item
  glossary, //glossary terms and definitions
  note, //notes
  video, //contains all videos
  repo, // contains all repos
  tipHintTrick, //contains all of the tht stuff
  image, //all pics
});

export default rootReducer;
