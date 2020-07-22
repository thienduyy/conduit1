export const LOGIN_PENDING = "LOGIN_PENDING";
export const LOAD_LOGIN = "LOAD_LOGIN";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const USER_PENDING = "USER_PENDING";
export const LOAD_USER = "LOAD_USER";
export const USER_ERROR = "USER_ERROR";
export const LOGOUT = "LOGOUT";

const action = (type, payload = {}) => {
  return { type, ...payload };
};

export const loginPending = (credential) => {
  return action(LOGIN_PENDING, credential);
};

export const loadLogin = (username, image) => {
  return action(LOAD_LOGIN, { username, image });
};

export const loginError = (error) => {
  return action(LOGIN_ERROR, error);
};

export const userPending = () => {
  return action(USER_PENDING);
};

export const loadUser = (username, image) => {
  return action(LOAD_USER, { username, image });
};

export const userError = (error) => {
  return action(USER_ERROR, error);
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};
