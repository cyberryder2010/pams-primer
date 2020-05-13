import axios from "axios";
import { put } from "redux-saga/effects";

function* postTag(action) {
  try {
    yield axios.post(`/api/tag/`, action.payload);
    yield put({
      type: "GET_TAG",
    });
  } catch (err) {
    console.warn(err);
  }
}

export default postTag;
