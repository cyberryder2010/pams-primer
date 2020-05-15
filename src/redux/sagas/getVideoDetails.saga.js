import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* getVideoDetails(action) {
  try {
    const response = yield axios.get(`/api/video`);
    yield put({
      type: "SET_VIDEO",
      payload: response.data,
    }); // put() is the same as this.props.dispatch()
  } catch (err) {
    console.warn(err);
  }
}
function* getVideoDetailsSaga() {
  yield takeLatest("GET_VIDEO_DETAILS", getVideoDetails);
}
export default getVideoDetailsSaga;
