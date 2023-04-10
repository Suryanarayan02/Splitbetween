import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import GradientButton from '../../Component/GradientButton';
import HeaderComponent from '../../Component/HeaderComponent';
import WrapperContainer from '../../Component/WrapperContainer';
import imagePath from '../../constants/imagePath';
import strings from '../../constants/lang';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import {
  moderateScale,
  moderateScaleVertical,
} from '../../styles/responsiveSize';
import OTPTextView from 'react-native-otp-textinput';
import navigationStrings from '../../navigation/navigationStrings';

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

  render() {
    const {phone, termSelected, showUserModal, isLoading, userData} =
      this.state;
    return (
      <WrapperContainer isLoading={isLoading}>
        <HeaderComponent
          leftIcon={imagePath.backRoyo}
          onPressLeft={() => this.props.navigation.goBack()}
          // leftImageStyle={styles.leftImageStyle}
          centerTitle={strings.ENTER_OTP}
          headerStyle={{backgroundColor: colors.white}}
          textStyle={{...commonStyles.font18Semibold, alignSelf: 'center'}}
        />
        <View style={{paddingHorizontal: moderateScale(16), flex: 1}}>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <OTPTextView
              ref={e => (this.input1 = e)}
              // containerStyle={styles.textInputContainer}
              textInputStyle={[
                styles.roundedTextInput,
                {borderWidth: 2, color: colors.themeColor},
              ]}
              tintColor={colors.themeColor}
              handleTextChange={text => this.setState({otp: text})}
              inputCount={4}
              keyboardType="numeric"
            />
            <GradientButton
              containerStyle={{marginTop: moderateScaleVertical(48)}}
              btnText={strings.CONTINUE}
              onPress={() => this.moveToScreen()}
              btnStyle={{padding: moderateScaleVertical(12)}}
            />
            <View style={styles.termCondition}>
              <Text
                style={{
                  flex: 1,
                  ...commonStyles.font10SemiBold,
                  color: colors.textGreyOpacity53,
                  // textAlign: 'justify',
                  marginRight: moderateScale(16),
                }}>
                {/* {strings.PRIVACY_MESSAGE} */}
                By creating an account you agree to our{' '}
                <Text
                  onPress={() =>
                    this.props.navigation.navigate(
                      navigationStrings.PRIVACY_POLICY,
                    )
                  }
                  style={{
                    ...commonStyles.font10SemiBold,
                    color: colors.themeColor,
                  }}>
                  Terms & condition{' '}
                </Text>
                and{' '}
                <Text
                  onPress={() =>
                    this.props.navigation.navigate(
                      navigationStrings.PRIVACY_POLICY,
                    )
                  }
                  style={{
                    ...commonStyles.font10SemiBold,
                    color: colors.themeColor,
                  }}>
                  Privacy Policy
                </Text>
              </Text>
              <TouchableOpacity onPress={this.onPressPolicyTerm}>
                <Image
                  source={
                    termSelected
                      ? imagePath.checkSquareFilled
                      : imagePath.tickBlank
                  }
                />
              </TouchableOpacity>
            </View>
          </View>
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
    // justifyContent: 'center',
    // justifyContent: 'space-between',
    // marginTop: moderateScaleVertical(24),
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
