import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* postVideo(action) {
  try {
    yield axios.post(`/api/video`, action.payload);
    yield put({
      type: "GET_VIDEO_DETAILS",
    });
  } catch (err) {
    console.warn(err);
  }
}
function* postVideoSaga() {
  yield takeLatest("POST_VIDEO", postVideo);
}
export default postVideoSaga;
