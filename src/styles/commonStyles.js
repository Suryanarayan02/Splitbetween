import {StyleSheet} from 'react-native';
import colors from './colors';
import fontFamily from './fontFamily';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from './responsiveSize';

export const responsiveText = ({
  fontSize,
  color,
  fontWeight,
  lineHeight,
  fontfamily,
}) => {
  return {
    fontSize: fontSize ? textScale(fontSize) : textScale(14),
    color: color ? color : colors.black,
    fontWeight: fontWeight ? fontWeight : 'normal',
    lineHeight: lineHeight ? textScale(lineHeight) : textScale(fontSize + 3),
    // fontFamily: fontfamily ? fontFamily[fontfamily] : '',
  };
};
export default StyleSheet.create({});
