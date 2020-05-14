import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* getTag(action) {
  try {
    const response = yield axios.get("/api/tag");
    yield put({
      type: "SET_TAG",
      payload: response.data,
    }); // put() is the same as this.props.dispatch()
  } catch (err) {
    console.warn(err);
  }
}
function* getTagSaga() {
  yield takeLatest("GET_TAG", getTag);
}
export default getTagSaga;
