import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* postNote(action) {
  try {
    const response = yield axios.post(`/api/note`, action.payload);
    yield put({
      type: "SET_NEW_NOTE",
      payload: response.data,
    });
  } catch (err) {
    console.warn(err);
  }
}
function* postNoteSaga() {
  yield takeLatest("POST_NOTE", postNote);
}
export default postNoteSaga;
