import axios from "axios";
import LocalStorageService from "./localStorageService";
import { tagUrl, articleUrl, loginUrl, getUserUrl } from "../constants/api";

const localStorageService = LocalStorageService.getService();

const fetchTag = async () => {
  const { data, status } = await axios.get(tagUrl());
  if (status >= 400) {
    throw new Error(data.errors);
  }
  return data;
};

const fetchArticle = async (limit = 10, offset, tag) => {
  const { data, status } = await axios.get(articleUrl(limit, offset, tag));
  if (status >= 400) {
    throw new Error(data.errors);
  }
  return data;
};

const fetchLogin = async (email, password) => {
  const { data, status } = await axios.post(loginUrl(), {
    user: {
      email,
      password,
    },
  });
  if (status >= 400) {
    throw new Error(data.errors);
  }
  return data;
};

const fetchUser = async () => {
  const token = localStorageService.getAccessToken();
  console.log("token", token);
  if (!token) {
    throw new Error("Error User");
  }

  const { data, status } = await axios.get(getUserUrl(), {
    headers: { Authorization: `Token ${token}` },
  });

  if (status >= 400) {
    throw new Error(data.errors);
  }

  return data;
};

export { fetchTag, fetchArticle, fetchLogin, fetchUser };
