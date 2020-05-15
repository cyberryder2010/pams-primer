import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* postVideo(action) {
  try {
    yield axios.post(`/api/video/`, action.payload);
    yield put({
      type: "GET_VIDEO",
    });
  } catch (err) {
    console.warn(err);
  }
}
function* videoSaga() {
  yield takeLatest("GET_VIDEO", postVideo);
}
export default videoSaga;
