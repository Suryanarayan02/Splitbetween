import React from 'react';
import {View, Text, SafeAreaView, StatusBar} from 'react-native';
import colors from '../styles/colors';
import Loader from './Loader';
const WrapperContainer = ({
  children,
  isLoading,
  bgColor = colors.white,
  statusBarColor = colors.white,
  barStyle = 'dark-content',
  loaderColor = colors.themeColor,
  translucent = false,
  withMoal = false,
}) => {
  return (
    <SafeAreaView style={{backgroundColor: bgColor, flex: 1}}>
      <StatusBar
        translucent={translucent}
        backgroundColor={statusBarColor}
        barStyle={barStyle}
      />
      <View style={{backgroundColor: bgColor, flex: 1}}>{children}</View>
      {/* <Loader isLoading={true}/> */}
    </SafeAreaView>
  );
};

export default WrapperContainer;
