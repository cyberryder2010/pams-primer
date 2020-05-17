import axios from "axios";
import { put } from "redux-saga/effects";

function* deleteReference(action) {
  try {
    yield axios.delete(`/api/reference/${action.payload.referenceId}`);
    yield put({
      type: "GET_REFERENCE",
      payload: action.payload.referenceId,
    });
  } catch (err) {
    console.warn(err);
  }
}

export default deleteReference;
