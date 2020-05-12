import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* getRepoList(action) {
  try {
    const response = yield axios.get("/api/repo");
    yield put({
      type: "SET_REPO",
      payload: response.data,
    }); // put() is the same as this.props.dispatch()
  } catch (err) {
    console.warn(err);
  }
}

function* repoSaga() {
  yield takeLatest("GET_ALL_REPOS", getRepoList);
}

export default repoSaga;
