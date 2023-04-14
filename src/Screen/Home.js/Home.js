import {View, Text, ImageBackground} from 'react-native';
import React, {useState} from 'react';
import TextInputWithImage from '../../Component/TextInputWithImage';
import HeaderComponent from '../../Component/HeaderComponent';
import WrapperContainer from '../../Component/WrapperContainer';
import imagePath from '../../constants/imagePath';
import colors from '../../styles/colors';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '../../styles/responsiveSize';
import strings from '../../constants/lang';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import ButtonWithIcon from '../../Component/ButtonWithIcon';
import navigationStrings from '../../navigation/navigationStrings';
import {validateEmailId} from '../../utils/Validations';
import {saveUserData} from '../../redux/actions/auth';

const Home = props => {
  const {navigation} = props;

  return (
    <WrapperContainer
      bgColor={colors.backGroundColor}
      statusBarColor={colors.white}>
      <Text onPress={() => saveUserData({})}>Logout</Text>
    </WrapperContainer>
  );
};

export default Home;
