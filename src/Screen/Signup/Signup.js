import {View, Text, Image, ImageBackground} from 'react-native';
import React from 'react';
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

const Signup = props => {
  const {navigation} = props;
  return (
    <WrapperContainer
      bgColor={colors.backGroundColor}
      statusBarColor={colors.white}>
      <ImageBackground
        source={imagePath.signupGraphic}
        resizeMode="contain"
        style={{flex: 1, backgroundColor: colors.white}}>
        <HeaderComponent
          leftIcon={imagePath.back}
          leftImageStyle={{
            borderWidth: 1,
            borderRadius: 25,
            borderColor: 'whitesmoke',
          }}
        />
      </ImageBackground>

      <View
        style={{
          flex: 1.6,
          backgroundColor: colors.white,
        }}>
        <KeyboardAwareScrollView
          contentContainerStyle={{flexGrow: 1}}
          style={{
            flexGrow: 1,
            backgroundColor: colors.backGroundColor,
            paddingHorizontal: moderateScale(16),
            paddingVertical: moderateScaleVertical(24),
            borderTopRightRadius: moderateScaleVertical(34),
            borderTopLeftRadius: moderateScaleVertical(34),
            // paddingBottom: moderateScaleVertical(108),
          }}>
          <Text style={{fontSize: textScale(20)}}>{strings.signup}</Text>
          <Text
            style={{
              fontSize: textScale(12),
              lineHeight: textScale(15),
              color: colors.greyText,
            }}>
            {strings.pleaseEnterDetail}
          </Text>
          <TextInputWithImage placeholder={strings.fullName} />
          <TextInputWithImage placeholder={strings.email} />
          <TextInputWithImage
            placeholder={strings.password}
            rightImage={imagePath.eyeOff}
          />
          <TextInputWithImage
            placeholder={strings.confirmPassword}
            rightImage={imagePath.eyeOff}
          />
          <TextInputForMobile placeholder={strings.mobileNumber} />
          <ButtonWithIcon text={strings.signup} />
          <Text
            style={{
              textAlign: 'center',
              color: colors.greyText,
              fontSize: textScale(12),
            }}>
            {strings.splitwiseTermText}
          </Text>
        </KeyboardAwareScrollView>
      </View>
    </WrapperContainer>
  );
};

export default Signup;
