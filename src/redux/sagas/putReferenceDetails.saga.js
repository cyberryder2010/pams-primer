import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* putReferenceDetails(action) {
  try {
    const referenceId = action.payload.id;
    yield axios.put(`/api/reference/edit/${referenceId}`, action.payload);
    yield put({
      type: "GET_REFERENCE",
      payload: referenceId,
    });
    yield put({
      type: "GET_REFERENCE_TAG",
      payload: referenceId,
    });
  } catch (err) {
    console.warn(err);
  }
}

function* putReferenceDetailsSaga() {
  yield takeLatest("GET_REFERENCE_TAG", putReferenceDetails);
  yield takeLatest("GET_REFERENCE", putReferenceDetails);
}

export default putReferenceDetailsSaga;
