import { useCallback, useState } from 'react';
import FastImage from 'react-native-fast-image';
import { useNavigation } from '@react-navigation/native';

import { CONSTANTS } from '../resources';
import { asyncTimeout } from '../lib/misc';
import {articlesServices} from '../services';

function useArticles() {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const { navigate } = useNavigation();

  const getArticles = useCallback(async () => {
    setError('');
    setIsError(false);
    setIsLoading(true);

    try {
      const [res] = await Promise.all([
        articlesServices.getMostViewedArticles(),
        asyncTimeout(450),
      ]);

      if (!res?.results) return isLoading(false);

      const data = res.results.map(
        ({title, media, published_date, id, byline, geo_facet, abstract}) => {
          const thumbnailUri =
            media[0]?.['media-metadata']?.find(({format}) => {
              return format === 'Standard Thumbnail';
            })?.url || media[0]?.['media-metadata']?.[0].url;

          media[0]?.['media-metadata']?.[1]?.url &&
            FastImage.preload([{uri: media[0]['media-metadata'][1].url}]);

          return {
            id,
            title,
            location: geo_facet[0],
            author: byline,
            date: published_date,
            thumbnailUri,
            imgUri: media[0]?.['media-metadata'][1].url,
            imgSharedId: `ny-img-${id}`,
            authorSharedId: `ny-author-${id}`,
            dateSharedId: `ny-date-${id}`,
            paragraph: abstract,
          };
        },
      );

      setData(data);
    } catch (error) {
      console.debug(error);
      setError('an error has occured please try again later');
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const showArticle = useCallback((item) => () => {
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
  }, []);

  return {
    getArticles,
    showArticle,
    articles: data,
    error,
    isLoading,
    isError,
  };
}

export default useArticles;
