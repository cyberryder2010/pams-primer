import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* postRepo(action) {
  try {
    const response = yield axios.post(`/api/repo`, action.payload);
    yield put({
      type: "SET_NEW_REPO",
      payload: response.data,
    });
  } catch (err) {
    console.warn(err);
  }
}
function* postRepoSaga() {
  yield takeLatest("POST_REPO", postRepo);
}
export default postRepoSaga;
