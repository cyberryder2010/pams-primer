import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* getVideo(action) {
  try {
    const VideoId = action.payload;
    const response = yield axios.get(`/api/video/${videoId}`);
    yield put({
      type: "SET_VIDEO",
      payload: response.data[0],
    }); // put() is the same as this.props.dispatch()
  } catch (err) {
    console.warn(err);
  }
}
function* getOneVideoSaga() {
  yield takeLatest("GET_VIDEO", getVideo);
}
export default getOneVideoSaga;
