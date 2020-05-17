import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* postTHT(action) {
  try {
    const response = yield axios.post(`/api/tip_hint_trick`, action.payload);
    yield put({
      type: "SET_NEW_THT",
      payload: response.data,
    });
  } catch (err) {
    console.warn(err);
  }
}
function* postTHTSaga() {
  yield takeLatest("POST_THT", postTHT);
}
export default postTHTSaga;
