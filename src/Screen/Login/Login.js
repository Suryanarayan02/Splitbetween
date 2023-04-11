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

const Login = props => {
  const {navigation} = props;
  const [state, setState] = useState({
    email: '',
    password: '',
  });
  const updateState = data => setState(state => ({...state, ...data}));
  const onChangeText = key => value => updateState({[key]: value});

  return (
    <WrapperContainer
      bgColor={colors.backGroundColor}
      statusBarColor={colors.white}>
      <ImageBackground
        source={imagePath.loginGraphic}
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
          <Text style={{fontSize: textScale(20)}}>{strings.login}</Text>
          <Text
            style={{
              fontSize: textScale(12),
              lineHeight: textScale(15),
              color: colors.greyText,
            }}>
            {strings.welcomeToLogin}
          </Text>
          <TextInputWithImage
            value={state.email}
            onChangeText={onChangeText('email')}
            placeholder={strings.email}
          />
          <TextInputWithImage
            value={state.password}
            onChangeText={onChangeText('password')}
            placeholder={strings.password}
          />
          <Text
            style={{
              textAlign: 'center',
              color: colors.themeColor,
              fontWeight: 'bold',
              fontSize: textScale(12),
              marginTop: moderateScaleVertical(48),
            }}>
            {strings.forgotPassword}
          </Text>
          <ButtonWithIcon text={strings.login} />
        </KeyboardAwareScrollView>
      </View>
    </WrapperContainer>
  );
};

export default Login;
