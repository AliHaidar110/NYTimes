import FastImage from 'react-native-fast-image';
import { FlatList, StyleSheet } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';

import { Card } from '../components';
import { CONSTANTS } from '../resources';
import { useNavigation } from '@react-navigation/native';

function ListScreen() {
  const [data, setData] = useState([]);

  const { navigate } = useNavigation();

  const renderCard = useCallback(({ item }) => {
    function onPress () {
      navigate(CONSTANTS.SCREENS.DETAILS, {
        title: item.title,
        imgUri: item.imgUri,
        paragraph: item.paragraph,
        author: item.author,
        date: item.date,
        imgSharedId: item.imgSharedId,
        authorSharedId: item.authorSharedId,
        dateSharedId: item.dateSharedId,
      }
      )
    };

    return (
      <Card
        onPress={onPress}
        title={item.title}
        author={item.author}
        location={item.location}
        date={item.date}
        thumbnailUri={item.thumbnailUri}
        imgSharedId={item.imgSharedId}
        authorSharedId={item.authorSharedId}
        dateSharedId={item.dateSharedId}
      />
    );
  }, []);

  useEffect(() => {
    fetch(
      'https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=YvJFcYPAGbM3tGEU42d0PsGD9MSVNwYn',
    )
      .then(res => {
        return res.json();
      })
      .then(res => {
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
      })
      .catch(err => console.log('err :>> ', err));
  }, []);

  return <FlatList data={data} keyExtractor={getKey} renderItem={renderCard} style={style.list} />;
}

function getKey(item, index) {
  return `${index}-ny-list-${item.id}`;
}

export default ListScreen;

const style = StyleSheet.create({
  list: {
    paddingHorizontal: 8,
  },
});
