export const LOAD_TAG = "LOAD_TAG";
export const TAG_PENDING = "TAG_PENDING";
export const TAG_ERROR = "TAG_ERROR";

// action creator
// action la 1 object, bat buoc phai co' thuoc tinh type
export const loadTag = (payload) => {
  return {
    type: LOAD_TAG,
    payload,
  };
};

export const tagPending = () => {
  return { type: TAG_PENDING };
};

export const tagError = (error) => {
  return {
    type: TAG_ERROR,
    payload: error,
  };
};
