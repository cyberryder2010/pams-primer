import axios from "axios";
import { put } from "redux-saga/effects";

function* postReferenceTag(action) {
  try {
    yield axios.post(`/api/reference/tag/`, action.payload);
    yield put({
      type: "GET_REFERENCE_TAG",
      payload: action.payload.reference_id,
    });
  } catch (err) {
    console.warn(err);
  }
}

export default postReferenceTag;
