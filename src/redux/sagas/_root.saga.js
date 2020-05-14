import { all } from "redux-saga/effects";
import loginSaga from "./login.saga";
import registrationSaga from "./registration.saga";
import userSaga from "./user.saga";

import getReferenceSaga from "./getReference.saga";
import postTagSaga from "./postTag.saga";
import getTagSaga from "./getTag.saga";
import getReferenceTagSaga from "./getReferenceTag.saga";
import postReferenceTagSaga from "./postReferenceTag.saga";
import putReferenceDetailsSaga from "./putReferenceDetails.saga";
import glossarySaga from "./glossary.saga";
import noteSaga from "./note.saga";
import videoSaga from "./video.saga";
import repoSaga from "./repo.saga";

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(),
    registrationSaga(),
    userSaga(),
    postTagSaga(),
    getTagSaga(),
    putReferenceDetailsSaga(),
    getReferenceSaga(),
    getTagSaga(),
    postTagSaga(),
    getReferenceTagSaga(),
    postReferenceTagSaga(),
    glossarySaga(),
    noteSaga(),
    videoSaga(),
    repoSaga(),
  ]);
}
