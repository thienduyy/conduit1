import {
  LOAD_ARTICLE,
  REMOVE_ARTICLE,
  ARTICLE_PENDING,
  ARTICLE_ERROR,
} from "../actions/article";

const initState = {
  isLoading: false,
  pagination: 0,
  error: null,
  tabs: {
    defaultTab: "Global Feed",
    data: [
      {
        tag: "Global Feed",
        content: [],
      },
    ],
  },
};

const articleReducer = (state = initState, action) => {
  switch (action.type) {
    //Article pending
    case ARTICLE_PENDING: {
      return { ...state, ...{ isLoading: true } };
    }

    //Load default Homepage: article
    case LOAD_ARTICLE: {
      const { payload } = action;
      //console.log(payload);
      const cloneState = { ...state };
      cloneState.pagination = payload.pagination;
      cloneState.tabs.defaultTab = payload.defaultTab;
      cloneState.isLoading = false;
      //Check now Tag
      if (payload.defaultTab.includes("Global Feed")) {
        cloneState.tabs.data = [payload.data];
      } else {
        const newData = [cloneState.tabs.data[0], payload.data];
        cloneState.tabs.data = newData;
      }

      //console.log("clone data", cloneState);
      //console.log("data", action.payload);
      return cloneState;
    }

    //Render homepage with tag name click
    case REMOVE_ARTICLE: {
      let cloneState = { ...state };
      console.log("2", cloneState);
      cloneState.pagination = 0;
      let nameTag = cloneState.tabs.data.tag;
      console.log("name", nameTag);
      //question
      cloneState.tabs.data = cloneState.tabs.data.filter((value) =>
        value.tag.includes("Global Feed")
      );
      cloneState.tabs.defaultTab = "Global Feed";
      return cloneState;
    }

    case ARTICLE_ERROR: {
      return { ...state, ...{ isLoading: false, error: action.payload } };
    }

    default:
      return state;
  }
};

export default articleReducer;
