import {
  LOAD_LOGIN,
  LOAD_USER,
  LOGIN_ERROR,
  LOGIN_PENDING,
  LOGOUT,
  USER_ERROR,
  USER_PENDING,
} from "../actions/login";

import LocalStorageService from "../service/localStorageService";
const localStorageService = LocalStorageService.getService();

const initState = {
  isLoading: false,
  isLogin: !localStorageService.getAccessToken(),
  error: null,
  username: null,
  image: null,
};

const loginReducer = (state = initState, action) => {
  switch (action.type) {
    //Login pending
    case LOGIN_PENDING: {
      return { ...state, isLoading: true, error: null };
    }

    //Login success
    case LOAD_LOGIN: {
      //console.log("action login", action);
      return {
        ...state,
        isLoading: false,
        isLogin: true,
        error: null,
        username: action.username,
        image: action.image,
      };
    }

    //Login error
    case LOGIN_ERROR: {
      return {
        ...state,
        isLoading: false,
        isLogin: false,
        error: action.error,
        username: null,
      };
    }
    //Logout
    case LOGOUT: {
      return {
        ...state,
        isLoading: false,
        isLogin: false,
        error: null,
        username: null,
      };
    }
    //User pending
    case USER_PENDING: {
      return { ...state, isLoading: true, error: null };
    }

    case LOAD_USER: {
      return {
        ...state,
        isLoading: false,
        isLogin: true,
        error: null,
        username: action.username,
        image: action.image,
      };
    }

    case USER_ERROR: {
      return {
        ...state,
        isLoading: false,
        isLogin: false,
        error: action.error,
        username: null,
      };
    }
    default:
      return state;
  }
};

export default loginReducer;
