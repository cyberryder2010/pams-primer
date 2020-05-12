import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* getGlossaryList(action) {
  try {
    const response = yield axios.get("/api/glossary");
    yield put({
      type: "SET_TERMS",
      payload: response.data,
    }); // put() is the same as this.props.dispatch()
  } catch (err) {
    console.warn(err);
  }
}

function* glossarySaga() {
  yield takeLatest("GET_ALL_TERMS", getGlossaryList);
}

export default glossarySaga;
