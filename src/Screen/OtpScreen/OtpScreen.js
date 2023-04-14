import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import HeaderComponent from '../../Component/HeaderComponent';
import WrapperContainer from '../../Component/WrapperContainer';
import imagePath from '../../constants/imagePath';
import strings from '../../constants/lang';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '../../styles/responsiveSize';
import OTPTextView from 'react-native-otp-textinput';
import navigationStrings from '../../navigation/navigationStrings';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import ButtonWithIcon from '../../Component/ButtonWithIcon';
import {saveUserData} from '../../redux/actions/auth';

export class OtpScreen extends Component {
  state = {
    isLoading: false,
    otp: '',
    termSelected: true,
    phone: this.props?.route?.params?.phone || '',
    userType: this.props?.route?.params?.userType || '',
    userData: this.props?.route?.params?.res,
    showUserModal: false,
  };
  onChangeText = otp => {
    this.setState({otp});
  };

  onPressPolicyTerm = () => {
    const {termSelected} = this.state;
    this.setState({termSelected: !termSelected});
  };
  onPressVerify = () => {
    if (this.state.otp.length < 4) {
      alert('Please complete OTP.');
    } else if (this.props.route.params?.parentStack) {
      saveUserData({token: 'login complete'});
    } else this.props.navigation.navigate(navigationStrings.RESET_PASSWORD);
  };
  render() {
    const {phone, termSelected, showUserModal, isLoading, userData} =
      this.state;
    return (
      <WrapperContainer
        bgColor={colors.backGroundColor}
        statusBarColor={colors.white}>
        <ImageBackground
          source={imagePath.verificationGraphic}
          resizeMode="contain"
          style={{flex: 1, backgroundColor: colors.white}}>
          <HeaderComponent
            onPressLeft={() => this.props.navigation.goBack()}
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
            flex: 1.5,
            backgroundColor: colors.white,
          }}>
          <KeyboardAwareScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              flexGrow: 1,
              justifyContent: 'space-around',
            }}
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
                {strings.verification}
              </Text>
              <Text
                style={{
                  fontSize: textScale(13),
                  lineHeight: textScale(17),
                  color: colors.greyText,
                }}>
                {strings.weHavesentText}
              </Text>
            </View>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <OTPTextView
                ref={e => (this.input1 = e)}
                // containerStyle={styles.textInputContainer}
                textInputStyle={[
                  {
                    borderWidth: 1,
                    borderRadius: moderateScale(6),
                    borderBottomWidth: 1,
                    fontWeight: 'normal',
                  },
                ]}
                tintColor={colors.themeColor}
                handleTextChange={text => this.setState({otp: text})}
                inputCount={4}
                keyboardType="numeric"
              />
              <Text
                style={{
                  color: colors.themeColor,
                  textAlign: 'center',
                  fontWeight: 'bold',
                  marginVertical: moderateScaleVertical(24),
                }}>
                {strings.resendOpt}
              </Text>
              <ButtonWithIcon
                onPress={this.onPressVerify}
                text={strings.verify}
              />
            </View>
          </KeyboardAwareScrollView>
        </View>
      </WrapperContainer>
    );
  }
}

export default OtpScreen;

const styles = StyleSheet.create({
  otpViewStyle: {
    marginTop: moderateScaleVertical(24),
  },
  phoneNumber: {},
  termCondition: {
    paddingVertical: moderateScaleVertical(48),
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftImageStyle: {
    borderWidth: 1,
    borderColor: colors.black,
    tintColor: colors.themeColor,
    borderRadius: 4,
  },
  profileSwitchButton: {
    padding: 8,
    ...commonStyles.border,
    ...commonStyles.gradientButtonText,
    marginVertical: moderateScaleVertical(8),
    color: colors.black,
  },
});
