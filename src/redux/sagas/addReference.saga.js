import axios from "axios";
import { put } from "redux-saga/effects";

function* addReferenceDetails(action) {
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

export default addReferenceDetails;
