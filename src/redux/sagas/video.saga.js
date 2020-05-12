import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* getAllVideos(action) {
  try {
    const response = yield axios.get("/api/video");
    yield put({
      type: "SET_VIDEO",
      payload: response.data,
    }); // put() is the same as this.props.dispatch()
  } catch (err) {
    console.warn(err);
  }
}

function* videoSaga() {
  yield takeLatest("GET_ALL_VIDEOS", getAllVideos);
}

export default videoSaga;
