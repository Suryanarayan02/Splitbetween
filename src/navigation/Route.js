import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import {useSelector} from 'react-redux';

const Stack = createStackNavigator();

const Routes = () => {
  const {userData} = useSelector(state => state.auth);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {!userData || !userData?.token ? AuthStack(Stack) : MainStack(Stack)}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
