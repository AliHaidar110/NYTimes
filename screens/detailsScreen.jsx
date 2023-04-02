import React from 'react';
import FastImage from 'react-native-fast-image';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';

import {CalendarIcon} from '../resources';

function DetailsScreen({
  route: {
    params: {
      title,
      paragraph,
      imgUri,
      imgSharedId,
      author,
      authorSharedId,
      date,
      dateSharedId,
    },
  },
}) {
  return (
    <ScrollView style={style.scrollContainer}>
      <Text style={style.title}>{title}</Text>

      <SharedElement id={imgSharedId}>
        <FastImage
          style={style.img}
          source={{
            uri: imgUri,
          }}
        />
      </SharedElement>

      <Text style={style.paragraph}>{paragraph}</Text>

      <View style={style.metaInfoContainer}>
        <SharedElement style={style.authorContainer} id={authorSharedId}>
          <Text style={style.text}>{author}</Text>
        </SharedElement>

        <SharedElement id={dateSharedId}>
          <View style={style.dateContainer}>
            <CalendarIcon />
            <Text style={style.text}>{date}</Text>
          </View>
        </SharedElement>
      </View>
    </ScrollView>
  );
}

export default DetailsScreen;

const style = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  metaInfoContainer: {
    flexDirection: 'row',
    flex: 1,
    paddingHorizontal: 8,
    paddingVertical: 16,
    alignItems: 'center',
  },
  authorContainer: {
    width: '70%',
    paddingEnd: 4,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    width: '100%',
    aspectRatio: 1.6,
  },
  title: {
    fontWeight: '600',
    fontSize: 16,
    paddingHorizontal: 8,
    paddingVertical: 16,
    color: '#1f1f1f',
  },
  paragraph: {
    fontWeight: '500',
    fontSize: 14,
    paddingHorizontal: 8,
    paddingVertical: 16,
    color: '#2c2c2c',
  },
  text: {
    fontWeight: '400',
    fontSize: 14,
    color: '#828282',
  },
});
