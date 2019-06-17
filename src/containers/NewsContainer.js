import { connect } from "react-redux";
import { getNewsList } from "../actions/news.actions";
import News from "../components/news/News";

const mapStateToProps = state => {
  return {
    news: state.news.news,
    loading: state.news.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getNewsList: channel_id => dispatch(getNewsList(channel_id))
  };
};

const NewsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(News);

export default NewsContainer;
