import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import colors from '../styles/colors';
import commonStyles from '../styles/commonStyles';
import {moderateScaleVertical, textScale} from '../styles/responsiveSize';

const GradientButton = ({
  containerStyle,
  btnStyle = {},
  colorsArray = [colors.buttonColor, colors.themeColor],
  borderRadius,
  onPress,
  btnText,
  marginTop = 0,
  marginBottom = 0,
  textStyle = {},
  image,
}) => {
  return (
    <TouchableOpacity
      style={{
        marginTop,
        marginBottom,

        ...commonStyles.border,
        borderWidth: 0,
        ...commonStyles.shadow,
        ...containerStyle,
      }}
      onPress={onPress}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          ...commonStyles.border,
          height: moderateScaleVertical(48),
          borderWidth: 0,
          backgroundColor: colors.themeColor,
          ...btnStyle,
        }}>
        <Text
          style={{
            ...commonStyles.fontSize14Regular,
            color: colors.white,
            ...textStyle,
          }}>
          {btnText}
        </Text>
        <Image style={{tintColor: colors.black}} source={image} />
      </View>
    </TouchableOpacity>
  );
};

export default GradientButton;
