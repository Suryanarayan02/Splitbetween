import {View, Text, ImageBackground, StyleSheet} from 'react-native';
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
import {validateEmailId, validatePhoneNumber} from '../../utils/Validations';
import {responsiveText} from '../../styles/commonStyles';

const ForgotPassword = props => {
  const {navigation} = props;
  const [state, setState] = useState({
    email: '',
    password: '',
  });
  const updateState = data => setState(state => ({...state, ...data}));
  const onChangeText = key => value => updateState({[key]: value});
  const isValid = () => {
    if (!validateEmailId(state.email)) {
      if (validatePhoneNumber(state.email)) return false;
    }
    return true;
  };
  const onPressForgot = () => {
    if (isValid()) {
      navigation.navigate(navigationStrings.OTP_SCREEN);
    } else alert('Input detail is not valid.');
  };
  return (
    <WrapperContainer
      bgColor={colors.backGroundColor}
      statusBarColor={colors.white}>
      <ImageBackground
        source={imagePath.forgotPasswordGraphic}
        resizeMode="contain"
        style={styles.imageBackgroundStyle}>
        <HeaderComponent
          onPressLeft={() => navigation.goBack()}
          leftIcon={imagePath.back}
          leftImageStyle={styles.headerLeftImage}
        />
      </ImageBackground>

      <View style={styles.body}>
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1, justifyContent: 'space-around'}}
          style={styles.subBody}>
          <View>
            <Text style={{fontSize: textScale(20)}}>
              {strings.forgotPassword}
            </Text>
            <Text
              style={responsiveText({
                fontSize: 14,
                lineHeight: 17,
                color: colors.greyText,
              })}>
              {strings.enterEmailaddText}
            </Text>
          </View>
          <TextInputWithImage
            value={state.email}
            onChangeText={onChangeText('email')}
            placeholder={strings.emailAddress}
          />

          <ButtonWithIcon onPress={onPressForgot} text={strings.sendOtp} />
        </KeyboardAwareScrollView>
      </View>
    </WrapperContainer>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  imageBackgroundStyle: {flex: 1, backgroundColor: colors.white},
  headerLeftImage: {
    borderWidth: 1,
    borderRadius: 25,
    borderColor: 'whitesmoke',
  },

  body: {
    flex: 1.7,
    backgroundColor: colors.white,
  },
  subBody: {
    backgroundColor: colors.backGroundColor,
    paddingHorizontal: moderateScale(16),
    paddingVertical: moderateScaleVertical(24),
    borderTopRightRadius: moderateScaleVertical(34),
    borderTopLeftRadius: moderateScaleVertical(34),
  },
});
