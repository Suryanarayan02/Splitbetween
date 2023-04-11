import {View, Text, Image, ImageBackground} from 'react-native';
import React, {useState} from 'react';
import WrapperContainer from '../../Component/WrapperContainer';
import HeaderComponent from '../../Component/HeaderComponent';
import imagePath from '../../constants/imagePath';
import colors from '../../styles/colors';
import strings from '../../constants/lang';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '../../styles/responsiveSize';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import TextInputWithImage from '../../Component/TextInputWithImage';
import ButtonWithIcon from '../../Component/ButtonWithIcon';
import TextInputForMobile from '../../Component/TextInputForMobile';
import navigationStrings from '../../navigation/navigationStrings';

const OnboardScreen = props => {
  const {navigation} = props;
  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
  });
  const updateState = data => setState(state => ({...state, ...data}));
  const onChangeText = key => value => updateState({[key]: value});
  return (
    <WrapperContainer
      bgColor={colors.backGroundColor}
      statusBarColor={colors.white}>
      <ImageBackground
        source={imagePath.graphic}
        resizeMode="contain"
        style={{flex: 1, backgroundColor: colors.white}}>
        {/* <HeaderComponent
          leftIcon={imagePath.back}
          leftImageStyle={{
            borderWidth: 1,
            borderRadius: 25,
            borderColor: 'whitesmoke',
          }}
        /> */}
      </ImageBackground>

      <View
        style={{
          flex: 1.2,
          backgroundColor: colors.white,
        }}>
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1, justifyContent: 'space-around'}}
          style={{
            flexGrow: 1,
            backgroundColor: colors.backGroundColor,
            paddingHorizontal: moderateScale(16),
            paddingVertical: moderateScaleVertical(24),
            borderTopRightRadius: moderateScaleVertical(34),
            borderTopLeftRadius: moderateScaleVertical(34),
            // paddingBottom: moderateScaleVertical(108),
          }}>
          <ButtonWithIcon
            onPress={() => navigation.navigate(navigationStrings.SIGNUP)}
            text={strings.signup}
          />
          <ButtonWithIcon
            onPress={() => navigation.navigate(navigationStrings.LOGIN)}
            containerStyle={{
              backgroundColor: colors.white,
              borderColor: colors.themeColor,
              borderWidth: 1,
            }}
            textStyle={{color: colors.themeColor}}
            text={strings.login}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              height: moderateScaleVertical(48),
            }}>
            <View
              style={{flex: 1, borderWidth: 1, borderColor: colors.greyText}}
            />
            <Text
              style={{
                textAlign: 'center',
                color: colors.greyText,
                fontSize: textScale(14),
                marginHorizontal: moderateScale(10),
                //   marginBottom: moderateScaleVertical(48),
              }}>
              {strings.or}
            </Text>
            <View
              style={{flex: 1, borderWidth: 1, borderColor: colors.greyText}}
            />
          </View>
          <ButtonWithIcon
            containerStyle={{
              backgroundColor: colors.white,
              borderColor: colors.black,
              borderWidth: 1,
            }}
            textStyle={{
              color: colors.black,
              marginHorizontal: moderateScale(12),
            }}
            leftSource={imagePath.google}
            text={strings.signInwithGoogle}
          />
          <Text
            style={{
              textAlign: 'center',
              color: colors.greyText,
              fontSize: textScale(12),
              marginBottom: moderateScaleVertical(48),
            }}>
            {strings.term}
            <Text> | {strings.privacy}</Text>
            <Text> | {strings.contactus}</Text>
          </Text>
        </KeyboardAwareScrollView>
      </View>
    </WrapperContainer>
  );
};

export default OnboardScreen;
