import { LOAD_TAG, TAG_PENDING, TAG_ERROR } from "../actions/tag";

const initialState = {
  isLoading: false,
  tagList: [],
  error: null,
};

const tagReducer = (state = initialState, action) => {
  switch (action.type) {
    case TAG_PENDING: {
      return { ...state, isLoading: true, error: null };
    }

    case LOAD_TAG: {
      const { payload } = action;
      return { ...state, tagList: payload.tags, isLoading: false };
    }

    case TAG_ERROR: {
      return { ...state, isLoading: false, error: action.error };
    }

    default:
      return state;
  }
};

export default tagReducer;
