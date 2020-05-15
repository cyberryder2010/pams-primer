import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* postReference(action) {
  try {
    const response = yield axios.post(`/api/reference`, action.payload);
    yield put({
      type: "SET_NEW_REFERENCE",
      payload: response.data,
    });
  } catch (err) {
    console.warn(err);
  }
}
function* postReferenceSaga() {
  yield takeLatest("POST_REFERENCE", postReference);
}
export default postReferenceSaga;
