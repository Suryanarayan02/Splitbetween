import React, {useState} from 'react';
import {View, Text, Image, TextInput} from 'react-native';
import imagePath from '../constants/imagePath';
import colors from '../styles/colors';
import commonStyles from '../styles/commonStyles';
import fontFamily from '../styles/fontFamily';
import {moderateScale, moderateScaleVertical} from '../styles/responsiveSize';

export default function TextInputWithImage(props) {
  const [focused, setFocused] = useState(false);
  let {
    onChangeText = () => {},
    secureTextEntry = false,
    containerStyle = {},
    placeholder = '',
    leftImage = '',
    rightImage = '',
    value = '',
  } = props;
  return (
    <View
      style={{
        ...commonStyles.border,
        flexDirection: 'row',
        marginTop: moderateScale(18),
        paddingHorizontal: moderateScale(8),
        height: moderateScaleVertical(48),
        borderRadius: moderateScaleVertical(8),
        backgroundColor: colors.white,
        borderWidth: 1,
        borderColor: focused ? colors.themeColor : colors.backGroundColor,
        alignItems: 'center',
        ...containerStyle,
      }}>
      {leftImage && <Image style={{opacity: 0.7}} source={leftImage} />}
      <View style={{flex: 1}}>
        <TextInput
          onBlur={() => setFocused(false)}
          onFocus={() => setFocused(true)}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          style={{
            flex: 1,
            paddingTop: 0,
            paddingHorizontal: 8,
            paddingBottom: 0,
            color: colors.black,
          }}
          placeholderTextColor={colors.greyText}
          placeholder={placeholder}
        />
      </View>
      {rightImage && <Image style={{opacity: 0.7}} source={rightImage} />}
    </View>
  );
}
