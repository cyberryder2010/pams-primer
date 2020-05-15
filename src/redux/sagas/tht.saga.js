import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* getAllTipHintTrick(action) {
  try {
    const response = yield axios.get("/api/tip_hint_trick");
    yield put({
      type: "SET_THT",
      payload: response.data,
    }); // put() is the same as this.props.dispatch()
  } catch (err) {
    console.warn(err);
  }
}

function* tipHintTrick() {
  yield takeLatest("GET_ALL_THT", getAllTipHintTrick);
}

export default tipHintTrick;
