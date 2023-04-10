import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import colors from '../styles/colors';
import commonStyles from '../styles/commonStyles';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '../styles/responsiveSize';

const ButtonWithIcon = props => {
  let {
    containerStyle = {},
    textStyle = {},
    text = 'Press me',
    leftSource,
    rightSource,
    rightImageStyle,
    onPress = () => {
      // alert('no function is passed');
    },
  } = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: 'row',
        backgroundColor: colors.themeColor,
        height: moderateScaleVertical(48),
        borderRadius: moderateScaleVertical(8),
        marginVertical: moderateScaleVertical(20),
        justifyContent: 'center',
        alignItems: 'center',
        ...containerStyle,
      }}>
      {leftSource ? <Image source={leftSource} /> : null}
      <Text
        style={{
          fontSize: textScale(13),
          fontWeight: 'bold',
          flex: 1,
          color: colors.white,
          textAlign: 'center',
          ...textStyle,
        }}>
        {text}
      </Text>
      {rightSource ? (
        <Image source={rightSource} style={{...rightImageStyle}} />
      ) : null}
    </TouchableOpacity>
  );
};

export default ButtonWithIcon;

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    backgroundColor: colors.themeColor,
    borderRadius: moderateScale(10),
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: moderateScaleVertical(2),
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
    padding: moderateScale(15),
  },
  textStyle: {
    ...commonStyles.fontSize16SemiBold,
  },
});
