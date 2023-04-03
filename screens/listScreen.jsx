import React, { useCallback, useEffect } from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';

import { Card } from '../components';
import { useArticles } from '../hooks';

function ListScreen() {
  const { articles, isLoading, isError, error, getArticles, showArticle } = useArticles();

  const renderCard = useCallback(({item}) => {
    const onPress = showArticle(item);

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

  const renderListEmptyComponent = useCallback(() => {
    if (isLoading) {
      return (
        <Text
          style={{
            paddingTop: 24,
            fontWeight: '600',
            fontSize: 16,
            color: '#2c2c2c',
            textAlign: 'center',
          }}>
          getting the articals for you
        </Text>
      );
    }

    if (isError && error) {
      return (
        <Text
          style={{
            paddingTop: 24,
            fontWeight: '600',
            fontSize: 16,
            color: '#2c2c2c',
            textAlign: 'center',
          }}>
          {error}
        </Text>
      );
    }

    return (
      <Text
        style={{
          paddingTop: 24,
          fontWeight: '600',
          fontSize: 16,
          color: '#2c2c2c',
          textAlign: 'center',
        }}>
        There is no data try again later
      </Text>
    );
  }, [isLoading, isError, error]);

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <FlatList
      data={articles}
      style={style.list}
      refreshing={isLoading}
      keyExtractor={getKey}
      onRefresh={getArticles}
      renderItem={renderCard}
      ListEmptyComponent={renderListEmptyComponent}
    />
  );
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
