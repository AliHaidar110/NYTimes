import React from 'react';
import FastImage from 'react-native-fast-image';
import {SharedElement} from 'react-navigation-shared-element';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';

import {RightArrowIcon, CalendarIcon} from '../resources';

function Card({
  title,
  location,
  thumbnailUri,
  imgSharedId,
  author,
  authorSharedId,
  date,
  dateSharedId,
  onPress,
}) {
  return (
    <TouchableOpacity onPress={onPress} style={style.rootContainer}>
      <SharedElement id={imgSharedId}>
        <FastImage
          source={{
            uri: thumbnailUri,
          }}
          style={style.img}
        />
      </SharedElement>

      <View style={style.titleContainer}>
        <Text numberOfLines={2} style={style.title}>
          {title}
        </Text>

        <View style={style.writerContainer}>
          <SharedElement id={authorSharedId}>
            <Text numberOfLines={2} style={style.text}>
              {author}
            </Text>
          </SharedElement>

          <View style={style.locationContainer}>
            <Text numberOfLines={1} style={[style.text, style.location]}>
              {location}
            </Text>

            <SharedElement style={style.dateContainer} id={dateSharedId}>
              <View style={style.dateContainer}>
                <CalendarIcon />
                <Text style={style.text}>{date}</Text>
              </View>
            </SharedElement>
          </View>
        </View>
      </View>
      <RightArrowIcon />
    </TouchableOpacity>
  );
}

export default Card;

const style = StyleSheet.create({
  rootContainer: {
    width: '100%',
    aspectRatio: '3.2/1',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: 'darkgrey',
    borderBottomWidth: 1,
    paddingVertical: 12,
  },
  titleContainer: {
    flex: 1,
    height: '100%',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingHorizontal: 6,
    paddingEnd: 40,
  },
  writerContainer: {
    width: '100%',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  img: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  title: {
    fontWeight: '600',
    fontSize: 16,
    color: '#1f1f1f',
  },
  location: {
    width: '80%',
  },
  text: {
    fontWeight: '400',
    fontSize: 14,
    color: '#828282',
  },
});
