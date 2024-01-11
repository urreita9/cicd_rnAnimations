import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Pressable,
  SafeAreaView,
} from 'react-native';
import {RootStackParamList} from '../navigation/MainNavigator';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {DETAILS_SCREEN, HOME_SCREEN} from '../navigation/screens';

import {icons} from '../config/icons';
import {SharedElement} from 'react-navigation-shared-element';
import {food} from '../config/food';
import List from '../components/List';

type Props = NativeStackScreenProps<RootStackParamList, typeof HOME_SCREEN>;

const HomeScreen = ({navigation, route}: Props) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>Feature 1</Text>
        <List data={food} />
        <View style={styles.iconsContainer}>
          {icons?.map(icon => (
            <Pressable
              key={icon.id}
              style={styles.button}
              onPress={() =>
                navigation.navigate(DETAILS_SCREEN, {id: icon.id})
              }>
              <SharedElement id={`item.${icon.id}.icon`}>
                <View style={styles.icon}>{icon.icon}</View>
              </SharedElement>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  iconsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 60,
    height: 60,
    margin: 15,
  },
  icon: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
