import {View, Text, Image} from 'react-native';
import React from 'react';
import colors from '../../styles/colors';
import WrapperContainer from '../../Component/WrapperContainer';
import HeaderComponent from '../../Component/HeaderComponent';
import imagePath from '../../constants/imagePath';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '../../styles/responsiveSize';
import strings from '../../constants/lang';
import ButtonWithIcon from '../../Component/ButtonWithIcon';
import navigationStrings from '../../navigation/navigationStrings';

const Groups = props => {
  const {navigation} = props;

  return (
    <WrapperContainer
      bgColor={colors.backGroundColor}
      statusBarColor={colors.white}>
      <HeaderComponent
        headerStyle={{
          borderBottomWidth: 1,
          borderBottomColor: colors.greyText,
          height: moderateScaleVertical(40),
        }}
        leftIcon={imagePath.logo}
        leftImageStyle={{
          height: moderateScaleVertical(30),
          width: 130,
        }}
        centerIconStyle={{
          flex: 1,
          alignItems: 'flex-end',
          justifyContent: 'center',
          marginRight: moderateScale(12),
        }}
        centerIcon={imagePath.search}
        onPressRight={() => navigation.navigate(navigationStrings.CREATEGRP)}
        rightIcon={imagePath.addGroupOn}
      />

      <View
        style={{
          flex: 1,
          paddingHorizontal: moderateScale(16),
          paddingVertical: moderateScaleVertical(24),
        }}>
        <Text
          style={{
            fontSize: textScale(18),
            fontWeight: '500',
            color: colors.black,
          }}>
          {strings.welcomeToSplit}
        </Text>
        <Image source={imagePath.emptyGraphic} />
        <Text
          style={{
            margin: moderateScaleVertical(24),
            textAlign: 'center',
            color: colors.greyText,
          }}>
          {strings.asYouuseSplit}
        </Text>
        <ButtonWithIcon
          containerStyle={{
            backgroundColor: colors.white,
            borderColor: colors.themeColor,
            borderWidth: 1,
          }}
          textStyle={{
            color: colors.themeColor,
            marginHorizontal: moderateScale(12),
          }}
          onPress={() => navigation.navigate(navigationStrings.CREATEGRP)}
          leftSource={imagePath.groupOn}
          text={strings.startANewGrp}
        />
      </View>
    </WrapperContainer>
  );
};

export default Groups;
