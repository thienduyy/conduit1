import { all, fork } from "redux-saga/effects";
import tagSaga from "./tagSaga";
import articleSaga from "./articleSaga";

export default function* () {
  yield all([fork(tagSaga), fork(articleSaga)]);
}
