import {View, Text} from 'react-native';
import React from 'react';
import {saveUserData} from '../../redux/actions/auth';
import colors from '../../styles/colors';
import WrapperContainer from '../../Component/WrapperContainer';

const Account = props => {
  const {navigation} = props;

  return (
    <WrapperContainer
      bgColor={colors.backGroundColor}
      statusBarColor={colors.white}>
      <Text onPress={() => saveUserData({})}>Logout</Text>
    </WrapperContainer>
  );
};

export default Account;
