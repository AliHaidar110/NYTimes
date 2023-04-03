import {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import {CONSTANTS} from '../resources';
import {articlesFetchers, articlesSelectors} from '../store';

function useArticles() {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const status = useSelector(articlesSelectors.selectArticlesStatus);
  const error = useSelector(articlesSelectors.selectArticlesError);
  const articles = useSelector(articlesSelectors.selectArticles);

  const dispatch = useDispatch();

  const {navigate} = useNavigation();

  const getArticles = useCallback(async () => {
    dispatch(articlesFetchers.fetchMostViewdArticles());
  }, []);

  const showArticle = useCallback(
    item => () => {
      navigate(CONSTANTS.SCREENS.DETAILS, {
        title: item.title,
        imgUri: item.imgUri,
        paragraph: item.paragraph,
        author: item.author,
        date: item.date,
        imgSharedId: item.imgSharedId,
        authorSharedId: item.authorSharedId,
        dateSharedId: item.dateSharedId,
      });
    },
    [status],
  );

  useEffect(() => {
    setIsError(status === CONSTANTS.SLICE.STATUS.FAILED);
    setIsLoading(status === CONSTANTS.SLICE.STATUS.LOADING);
  }, [status]);

  return {
    getArticles,
    showArticle,
    articles,
    error,
    isLoading,
    isError,
  };
}

export default useArticles;
