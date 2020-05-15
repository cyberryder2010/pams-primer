import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* getAllReference(action) {
  try {
    const response = yield axios.get("/api/reference");
    yield put({
      type: "SET_REFERENCE",
      payload: response.data,
    }); // put() is the same as this.props.dispatch()
  } catch (err) {
    console.warn(err);
  }
}

function* getAllReferenceSaga() {
  yield takeLatest("GET_ALL_REFERENCE", getAllReference);
}
export default getAllReferenceSaga;
