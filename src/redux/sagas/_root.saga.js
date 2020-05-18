import { all } from "redux-saga/effects";
import loginSaga from "./login.saga";
import registrationSaga from "./registration.saga";
import userSaga from "./user.saga";

import getAllReferenceSaga from "./getAllReference.saga";
import getReferenceDetailsSaga from "./getReferenceDetails.saga";
import postTagSaga from "./postTag.saga";
import getTagSaga from "./getTag.saga";
import getReferenceTagSaga from "./getReferenceTag.saga";
import getVideoDetailsSaga from "./getVideoDetails.saga";
import postReferenceSaga from "./postReference.saga";
import postReferenceTagSaga from "./postReferenceTag.saga";
import putReferenceDetailsSaga from "./putReferenceDetails.saga";
import deleteReferenceSaga from "./deleteReference.saga";
import glossarySaga from "./glossary.saga";
import noteSaga from "./note.saga";
import videoSaga from "./video.saga";
import repoSaga from "./repo.saga";
import tipHintTrick from "./tht.saga";
import imageSaga from "./image.saga";
import postVideoSaga from "./postVideo.saga";
import getAllLinksSaga from "./link.saga";
import postRepoSaga from "./postRepo.saga";
import postLinkSaga from "./postLink.saga";
import postNoteSaga from "./postNote.saga";
import postTHTSaga from "./postTHT.saga";
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
    glossarySaga(),
    noteSaga(),
    videoSaga(),
    repoSaga(),
    tipHintTrick(),
    imageSaga(),
    getAllLinksSaga(),
    postReferenceSaga(),
    getReferenceTagSaga(),
    postReferenceTagSaga(),
    getReferenceDetailsSaga(),
    putReferenceDetailsSaga(),
    getAllReferenceSaga(),
    deleteReferenceSaga(),
    getTagSaga(),
    postTagSaga(),
    postVideoSaga(),
    getVideoDetailsSaga(),
    postRepoSaga(),
    postLinkSaga(),
    postNoteSaga(),
    postTHTSaga(),
  ]);
}
