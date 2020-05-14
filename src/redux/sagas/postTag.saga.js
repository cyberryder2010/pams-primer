import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* postTag(action) {
  try {
    yield axios.post(`/api/tag/`, action.payload);
    yield put({
      type: "GET_TAG",
    });
  } catch (err) {
    console.warn(err);
  }
}
function* tagSaga() {
  yield takeLatest("GET_TAG", postTag);
}
export default tagSaga;
