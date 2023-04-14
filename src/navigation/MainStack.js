import React from 'react';
import {Home} from '../Screen';
import navigationStrings from './navigationStrings';
import BottomTab from './BottomTab';

const MainStack = Stack => {
  return (
    <>
      <Stack.Screen name={navigationStrings.HOME} component={BottomTab} />
    </>
  );
};

export default MainStack;
