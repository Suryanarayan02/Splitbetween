import React from 'react';
import {Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import colors from '../styles/colors';
import commonStyles from '../styles/commonStyles';
import fontFamily from '../styles/fontFamily';
import { moderateScale, moderateScaleVertical, textScale } from '../styles/responsiveSize';


export default HeaderComponent = ({
  leftIcon,
  leftTitle,
  onPressLeft,

  centerIcon,
  centerTitle,
  centerIconStyle = {},

  rightIcon,
  rightTitle,
  onPressRight,

  leftIconWithText,
  leftIconText,
  leftImageStyle={},
  textStyle = {},
  imgStyle = {},
  headerStyle = {},
  padding = {},
}) => {
  return (
    <View style={{...styles.headerStyle, ...headerStyle, ...padding}}>
         {/* <Text style={{...styles.textStyle, ...textStyle}}>{leftIconWithText}</Text> */}
      {leftTitle ? (
        <Text style={{...styles.textStyle, ...textStyle}}>{leftTitle}</Text>
      ) : (
        <TouchableOpacity activeOpacity={0.8} onPress={onPressLeft}>
          <Image source={leftIcon} style={{...leftImageStyle}}/>
          
        </TouchableOpacity>
      )}

      {centerTitle ? (
         <View style={{ flex: 0.9, }}>
        <Text style={{...styles.textStyle, ...textStyle,textAlign: 'left'}}>{centerTitle}</Text>
        </View>
      ) : (
        !!centerIcon && <Image source={centerIcon} style={centerIconStyle} />
      )}

      {rightTitle ? (
        <Text
          onPress={onPressRight}
          style={{...styles.textStyle, ...textStyle , }}>
          {rightTitle}
        </Text>
      ) : (
        <TouchableOpacity activeOpacity={0.8} onPress={onPressRight}>
          <Image style={{...imgStyle}} source={rightIcon} />
        </TouchableOpacity>
      )}
     
    </View>
  
       
       
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    flexDirection: 'row',
    paddingVertical: moderateScaleVertical(4),
    paddingHorizontal: moderateScale(16),
    // width: '100%',
    // backgroundColor: colors.themeColor,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  textStyle: {
    ...commonStyles.fontSize16Bold,
    // color: colors.white
  },
});
