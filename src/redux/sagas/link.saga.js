import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* getAllLinks(action) {
  try {
    const response = yield axios.get("/api/link");
    yield put({
      type: "SET_LINK",
      payload: response.data,
    }); // put() is the same as this.props.dispatch()
  } catch (err) {
    console.warn(err);
  }
}

function* getAllLinksSaga() {
  yield takeLatest("GET_ALL_LINKS", getAllLinks);
}

export default getAllLinksSaga;
