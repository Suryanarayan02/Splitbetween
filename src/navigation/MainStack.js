import React from 'react';
import {
  AddContact,
  AddFriend,
  CreateGroup,
  Home,
  VerifyContact,
} from '../Screen';
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
      <Stack.Screen
        name={navigationStrings.ADDCONTACT}
        component={AddContact}
      />
      <Stack.Screen
        name={navigationStrings.VERIFYCONTACT}
        component={VerifyContact}
      />
    </>
  );
};

export default MainStack;
