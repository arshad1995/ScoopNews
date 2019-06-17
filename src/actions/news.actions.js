import { REQUESTING, SUCCESS, FAILURE } from "../utils/constants";

export const NEWS_REQUESTING = "NEWS_REQUESTING";
export const NEWS_SUCCESS = "NEWS_SUCCESS";
export const NEWS_FAILURE = "NEWS_FAILURE";

export const newsRequesting = () => ({
  type: NEWS_REQUESTING,
  status: REQUESTING
});

export const newsSuccess = data => ({
  type: NEWS_SUCCESS,
  status: SUCCESS,
  data
});

export const newsFailure = error => ({
  type: NEWS_FAILURE,
  status: FAILURE,
  error
});

export const getNewsList = channel_id => {
  return async dispatch => {
    dispatch(newsRequesting());
    try {
      const data = await fetch(
        `https://newsapi.org/v2/top-headlines?sources=${channel_id}&apiKey=539240fb4d8d48bc9657e4c6fadfb939`
      );
      const result = await data.json();
      dispatch(newsSuccess(result.articles));
    } catch (error) {
      dispatch(newsFailure(error));
    }
  };
};
