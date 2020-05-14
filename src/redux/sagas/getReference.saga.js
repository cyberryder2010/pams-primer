import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* getReference(action) {
  try {
    const referenceId = action.payload;
    const response = yield axios.get(`/api/reference/details/${referenceId}`);
    yield put({
      type: "SET_DETAILS",
      payload: response.data[0],
    }); // put() is the same as this.props.dispatch()
  } catch (err) {
    console.warn(err);
  }
}
function* getReferenceSaga() {
  yield takeLatest("GET_REFERENCE", getReference);
}
export default getReferenceSaga;
