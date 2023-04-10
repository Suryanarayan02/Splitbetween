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

const Signup = props => {
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
          flex: 1.7,
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
          <TextInputWithImage
            value={state.name}
            onChangeText={onChangeText('name')}
            placeholder={strings.fullName}
          />
          <TextInputWithImage
            value={state.email}
            onChangeText={onChangeText('email')}
            placeholder={strings.email}
          />
          <TextInputWithImage
            value={state.password}
            onChangeText={onChangeText('password')}
            placeholder={strings.password}
            rightImage={imagePath.eyeOff}
          />
          <TextInputWithImage
            value={state.confirmPassword}
            onChangeText={onChangeText('confirmPassword')}
            placeholder={strings.confirmPassword}
            rightImage={imagePath.eyeOff}
          />
          <TextInputForMobile
            value={state.phone}
            onChangeText={onChangeText('phone')}
            placeholder={strings.mobileNumber}
          />
          <ButtonWithIcon text={strings.signup} />
          <Text
            style={{
              textAlign: 'center',
              color: colors.greyText,
              fontSize: textScale(12),
              marginBottom: moderateScaleVertical(48),
            }}>
            {strings.splitwiseTermText}
          </Text>
        </KeyboardAwareScrollView>
      </View>
    </WrapperContainer>
  );
};

export default Signup;
