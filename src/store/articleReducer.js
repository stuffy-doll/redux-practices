import articles from "../data/data.json";

// Types
const LOAD_ARTICLES = "article/loadArticles";

// Action Creators
export const loadArticles = () => {
  return {
    type: LOAD_ARTICLES,
    articles
  };
};

// Middleware

// Reducer Code
const initialState = { entries: [], isLoading: true };

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ARTICLES:
      return { ...state, entries: [...action.articles] };
    default:
      return state;
  }
};

export default articleReducer;
