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
import {saveUserData} from '../../redux/actions/auth';

const ResetPassword = props => {
  const {navigation} = props;
  const [state, setState] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const updateState = data => setState(state => ({...state, ...data}));
  const onChangeText = key => value => updateState({[key]: value});
  const onPressSave = () => {
    if (state.password.length < 6)
      alert('password must be greate the six letter');
    else if (state.password != state.confirmPassword)
      alert('password is not same.');
    else saveUserData({token: 'login complete'});
  };
  return (
    <WrapperContainer
      bgColor={colors.backGroundColor}
      statusBarColor={colors.white}>
      <ImageBackground
        source={imagePath.resetGraphic}
        resizeMode="contain"
        style={{flex: 1, backgroundColor: colors.white}}>
        <HeaderComponent
          onPressLeft={() => navigation.goBack()}
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
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1, justifyContent: 'space-around'}}
          style={{
            backgroundColor: colors.backGroundColor,
            paddingHorizontal: moderateScale(16),
            paddingVertical: moderateScaleVertical(24),
            borderTopRightRadius: moderateScaleVertical(34),
            borderTopLeftRadius: moderateScaleVertical(34),
            // paddingBottom: moderateScaleVertical(108),
          }}>
          <View>
            <Text style={{fontSize: textScale(20)}}>
              {strings.resetPassword}
            </Text>
            <Text
              style={{
                fontSize: textScale(12),
                lineHeight: textScale(15),
                color: colors.greyText,
              }}>
              {strings.setYourPaas}
            </Text>
          </View>
          <View>
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
          </View>

          <ButtonWithIcon onPress={onPressSave} text={strings.save} />
        </KeyboardAwareScrollView>
      </View>
    </WrapperContainer>
  );
};

export default ResetPassword;
