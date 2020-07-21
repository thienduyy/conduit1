import { takeEvery, call, put } from "redux-saga/effects";
import { TAG_PENDING, loadTag, tagError } from "../actions/tag";
import { fetchTag } from "../service/api";

function* tagHandling() {
  try {
    //call tag api
    const tagList = yield call(fetchTag);
    //dispatch fetch success action
    yield put(loadTag(tagList));
  } catch (err) {
    yield put(tagError(err.toString()));
  }
}

export default function* tagSaga() {
  yield takeEvery(TAG_PENDING, tagHandling);
}
