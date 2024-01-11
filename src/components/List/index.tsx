import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React from 'react';

const SCREEN_WIDTH = Dimensions.get('window').width;
const CARD_WIDTH = SCREEN_WIDTH * 0.66;
const CARD_HEIGHT = CARD_WIDTH * 0.66;
const SPACING = 15;

type Props<T> = {
  data: T;
};

const List = ({data}: any) => {
  return (
    <FlatList
      data={data}
      renderItem={({item}) => (
        <View style={styles.itemContainer}>
          <Image source={{uri: item.image}} style={styles.image} />
          <View style={styles.textContainer}>
            <Text>{item.name}</Text>
          </View>
        </View>
      )}
      horizontal
      snapToInterval={CARD_WIDTH + SPACING * 2}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default List;

const styles = StyleSheet.create({
  itemContainer: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    margin: SPACING,
    padding: SPACING,
    borderRadius: SPACING,
    overflow: 'hidden',
  },
  image: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    position: 'absolute',
  },
  textContainer: {
    backgroundColor: 'tomato',
    borderRadius: SPACING,
    padding: SPACING,
    margin: SPACING,
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});
