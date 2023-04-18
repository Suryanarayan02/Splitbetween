import React from 'react';
import {AddFriend, CreateGroup, Home} from '../Screen';
import navigationStrings from './navigationStrings';
import BottomTab from './BottomTab';

const MainStack = Stack => {
  return (
    <>
      <Stack.Screen name={navigationStrings.HOME} component={BottomTab} />
      <Stack.Screen name={navigationStrings.ADDFRIEND} component={AddFriend} />
      <Stack.Screen
        name={navigationStrings.CREATEGRP}
        component={CreateGroup}
      />
    </>
  );
};

export default MainStack;
