import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/MainNavigator';
import {DETAILS_SCREEN} from '../navigation/screens';
import {icons} from '../config/icons';
import {SharedElement} from 'react-navigation-shared-element';

type Props = NativeStackScreenProps<RootStackParamList, typeof DETAILS_SCREEN>;

const DetailScreen = ({route}: Props) => {
  const {id} = route.params;
  const icon = icons.find(i => i.id === id);
  return (
    <View style={styles.container}>
      <SharedElement id={`item.${id}.icon`}>
        <View style={styles.icon}>{icon?.icon}</View>
      </SharedElement>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
