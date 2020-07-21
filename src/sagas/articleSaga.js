import { takeLatest, call, put } from "redux-saga/effects";
import {
  ARTICLE_PENDING,
  articleError,
  loadArticle,
  REMOVE_ARTICLE,
  removeArticle,
} from "../actions/article";
import { fetchArticle } from "../service/api";

function* articleHandling(action) {
  try {
    const { limit, offset, tag } = action;
    const articleList = yield call(fetchArticle, limit, offset, tag);
    //console.log("saga", tag, limit, offset);
    //check tag now is default tag or new tag
    let nowTag = tag.length > 0 ? tag : "Global Feed";
    const tabs = {
      defaultTab: nowTag,
      pagination: offset,
      data: {
        tag: nowTag,
        content: articleList,
      },
    };
    //console.log(tabs);

    yield put(loadArticle(tabs));
  } catch (err) {
    yield put(articleError(err.toString()));
  }
}

function* articleRemove(action) {
  const { payload } = action;
  if (payload === null) {
    yield put(removeArticle(payload));
  }
}

export default function* watchArticle() {
  yield takeLatest(ARTICLE_PENDING, articleHandling);
  yield takeLatest(REMOVE_ARTICLE, articleRemove);
}
