import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* getAllImages(action) {
  try {
    const response = yield axios.get("/api/image");
    yield put({
      type: "SET_IMAGE",
      payload: response.data,
    }); // put() is the same as this.props.dispatch()
  } catch (err) {
    console.warn(err);
  }
}

function* imageSaga() {
  yield takeLatest("GET_ALL_PICS", getAllImages);
}

export default imageSaga;
