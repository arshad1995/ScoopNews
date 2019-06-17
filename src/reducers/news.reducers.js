import * as newsActions from "../actions/news.actions";

let initialState = {
  loading: false,
  news: "",
  status: null,
  error: null
};

const newsReducers = (state = initialState, action) => {
  switch (action.type) {
    case newsActions.NEWS_REQUESTING:
      return {
        ...state,
        loading: true,
        status: action.status
      };
    case newsActions.NEWS_SUCCESS:
      return {
        ...state,
        loading: false,
        status: action.status,
        news: action.data
      };
    case newsActions.NEWS_FAILURE:
      return {
        ...state,
        loading: false,
        status: action.status,
        error: action.error
      };
    default:
      return state;
  }
};

export default newsReducers;
