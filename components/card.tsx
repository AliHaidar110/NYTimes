import React from 'react';
import FastImage from 'react-native-fast-image';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  GestureResponderEvent,
} from 'react-native';

import {RightArrowIcon, CalendarIcon} from '../resources';

import type {PropsWithoutRef} from 'react';
import {SharedElement} from 'react-navigation-shared-element';

type CardProps = PropsWithoutRef<{
  title: string;
  author: string;
  location: string;
  date: string;
  thumbnailUri: string;
  imgSharedId: string;
  onPress: (event: GestureResponderEvent) => void;
}>;

function Card({
  title,
  author,
  location,
  date,
  thumbnailUri,
  imgSharedId,
  onPress,
}: CardProps) {
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
          <Text numberOfLines={2} style={style.paragraph}>
            {author}
          </Text>

          <View style={style.locationContainer}>
            <Text style={style.paragraph}>{location}</Text>

            <View style={style.dateContainer}>
              <CalendarIcon />
              <Text style={style.paragraph}>{date}</Text>
            </View>
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
    paddingHorizontal: 6,
    paddingVertical: 12,
    // backgroundColor: 'red',
  },
  titleContainer: {
    flex: 1,
    height: '100%',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingHorizontal: 6,
    paddingEnd: 40,
    // backgroundColor: 'green',
  },
  writerContainer: {
    width: '100%',
    // backgroundColor: 'yellow',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: 'blue',
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: 'black',
  },
  img: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  title: {
    fontWeight: '600',
    fontSize: 16,
  },
  paragraph: {
    fontWeight: '400',
    fontSize: 14,
    color: 'gray',
  },
});
