import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* postLink(action) {
  try {
    const response = yield axios.post(`/api/link`, action.payload);
    yield put({
      type: "SET_NEW_LINK",
      payload: response.data,
    });
  } catch (err) {
    console.warn(err);
  }
}
function* postLinkSaga() {
  yield takeLatest("POST_LINK", postLink);
}
export default postLinkSaga;
