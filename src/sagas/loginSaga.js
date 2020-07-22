import { take, takeLatest, call, put, fork } from "redux-saga/effects";
import {
  LOGIN_PENDING,
  USER_PENDING,
  loadUser,
  userError,
  loadLogin,
  loginError,
  logout,
  LOGOUT,
} from "../actions/login";
import { fetchLogin, fetchUser } from "../service/api";
import LocalStorageService from "../service/localStorageService";

const localStorageService = LocalStorageService.getService();

function* loginHandle(credential) {
  try {
    const { email, password } = credential;
    const data = yield call(fetchLogin, email, password);
    //console.log("saga", data);
    const { username, token, image } = data.user;

    //set Token
    localStorageService.setAccessToken(token);
    yield put(loadLogin(username, image));
  } catch (error) {
    const { errors } = error.response.data;
    if (errors) {
      yield put(loginError({ errors: "Email or password is invalid" }));
    }
  }
}

function* userHandle() {
  try {
    const data = yield call(fetchUser);
    console.log("data saga", data);
    const { username, image } = data.user;
    yield put(loadUser(username, image));
  } catch (error) {
    yield put(userError({ errors: "Email or password is invalid !" }));
  }
}

function* logoutHandle() {
  localStorageService.cleanService();
  yield put(logout);
}

export default function* watchLogin() {
  yield takeLatest(LOGIN_PENDING, loginHandle);
  yield takeLatest(USER_PENDING, userHandle);
  yield take(LOGOUT, logoutHandle);
}
