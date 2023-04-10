import React from 'react';
import {
  ForgotPassword,
  Login,
  MyWebView,
  OtpScreen,
  Signup,
} from '../Screen';
import navigationStrings from './navigationStrings';

const AuthStack = Stack => {
  return (
    <>
      <Stack.Screen name={navigationStrings.LOGIN} component={Login} />
      <Stack.Screen name={navigationStrings.SIGNUP} component={Signup} />

      <Stack.Screen
        name={navigationStrings.FORGOT_PASSWORD}
        component={ForgotPassword}
      />
      <Stack.Screen name={navigationStrings.OTP_SCREEN} component={OtpScreen} />
      <Stack.Screen
        name={navigationStrings.PRIVACY_POLICY}
        component={MyWebView}
      />
    </>
  );
};

export default AuthStack;
