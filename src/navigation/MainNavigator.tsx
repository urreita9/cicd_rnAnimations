import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import HomeScreen from '../screens/HomeScreen';
import {DETAILS_SCREEN, HOME_SCREEN} from './screens';
import DetailScreen from '../screens/DetailScreen';

export type RootStackParamList = {
  [HOME_SCREEN]: undefined;
  [DETAILS_SCREEN]: {id: number};
};

const Stack = createSharedElementStackNavigator<RootStackParamList>();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={HOME_SCREEN}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name={HOME_SCREEN} component={HomeScreen} />
        <Stack.Screen
          name={DETAILS_SCREEN}
          component={DetailScreen}
          sharedElements={(route, otherRoute, showing) => {
            const {id} = route.params;
            return [`item.${id}.icon`];
          }}
          options={{
            cardStyleInterpolator: ({current: {progress}}) => ({
              cardStyle: {
                opacity: progress,
              },
            }),
            transitionSpec: {
              open: {
                animation: 'timing',
                config: {duration: 300},
              },
              close: {
                animation: 'timing',
                config: {duration: 300},
              },
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
