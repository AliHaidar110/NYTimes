import { configureStore } from "@reduxjs/toolkit";

import articlesReducer, {
  fetchMostViewdArticles,
  selectArticles,
  selectArticlesError,
  selectArticlesStatus,
} from './slices/articlesSlice';

export default configureStore({
	enhancers: (defaultEnhancers) => [...defaultEnhancers],
  reducer: {
    articles: articlesReducer
  },
});

export const articlesSelectors = {
  selectArticles,
  selectArticlesError,
  selectArticlesStatus,
}

export const articlesFetchers = {
  fetchMostViewdArticles
}