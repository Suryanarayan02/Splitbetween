import {View, Text} from 'react-native';
import React from 'react';
import {WebView} from 'react-native-webview';
import { getApiUrl } from '../config/urls';
import WrapperContainer from './WrapperContainer';
import HeaderComponent from './HeaderComponent';
import imagePath from '../constants/imagePath';

const MyWebView = props => {
  const {navigation} = props
  // const {url} = props?.route?.params;
  const finalUrl = getApiUrl('/privacy')
  // console.log(url)
  return (
    <WrapperContainer>
      {/* <HeaderComponent leftIcon={imagePath.backRoyo} headerStyle={{backgroundColor: 'white'}} onPressLeft={()=>navigation.goBack()}/>
      <WebView source={{uri: finalUrl}} /> */}
    </WrapperContainer>
  )
};

export default MyWebView;
