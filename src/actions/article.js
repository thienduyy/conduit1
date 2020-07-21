export const LOAD_ARTICLE = "LOAD_ARTICLE";
export const ARTICLE_PENDING = "ARTICLE_PENDING";
export const REMOVE_ARTICLE = "REMOVE_ARTICLE";
export const ARTICLE_ERROR = "ARTICLE_ERROR";

const action = (type, payload = {}) => {
  return { type, ...payload };
};

export const loadArticle = (payload) => {
  return {
    type: LOAD_ARTICLE,
    payload,
  };
};

export const articlePending = (limit, offset, tag) => {
  return action(ARTICLE_PENDING, { limit, offset, tag });
};

export const removeArticle = (tag) => {
  return {
    type: REMOVE_ARTICLE,
    payload: tag,
  };
};

export const articleError = (error) => {
  return {
    type: ARTICLE_ERROR,
    payload: error,
  };
};
