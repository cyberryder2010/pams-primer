import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* deleteReference(action) {
  try {
    yield axios.delete(`/api/reference/details/${action.payload.referenceId}`);
    yield put({
      type: "GET_ALL_REFERENCE",
    });
  } catch (err) {
    console.warn(err);
  }
}
function* deleteReferenceSaga() {
  yield takeLatest("DELETE_REFERENCE", deleteReference);
}
export default deleteReferenceSaga;
