import {View, Text} from 'react-native';
import React from 'react';
import colors from '../../styles/colors';
import WrapperContainer from '../../Component/WrapperContainer';

const Activity = props => {
  const {navigation} = props;

  return (
    <WrapperContainer
      bgColor={colors.backGroundColor}
      statusBarColor={colors.white}>
      <Text>Activity</Text>
    </WrapperContainer>
  );
};

export default Activity;
