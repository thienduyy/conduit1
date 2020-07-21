import axios from "axios";

import { tagUrl, articleUrl } from "../constants/api";

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

export { fetchTag, fetchArticle };
