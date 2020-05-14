import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* getReferenceTag(action) {
  try {
    const referenceId = action.payload;
    const response = yield axios.get(`/api/reference/tag/${referenceId}`);
    yield put({
      type: "SET_REFERENCE_TAG",
      payload: response.data,
    });
  } catch (err) {
    console.warn(err);
  }
}

function* getReferenceTagSaga() {
  yield takeLatest("GET_REFERENCE_TAG", getReferenceTag);
}
export default getReferenceTagSaga;
