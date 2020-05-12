import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* getAllNotes(action) {
  try {
    const response = yield axios.get("/api/note");
    yield put({
      type: "SET_NOTE",
      payload: response.data,
    }); // put() is the same as this.props.dispatch()
  } catch (err) {
    console.warn(err);
  }
}

function* noteSaga() {
  yield takeLatest("GET_ALL_NOTES", getAllNotes);
}

export default noteSaga;
