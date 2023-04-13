import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import TextInputWithImage from './TextInputWithImage';
import {moderateScale, moderateScaleVertical} from '../styles/responsiveSize';
import colors from '../styles/colors';
import {CountryPicker} from 'react-native-country-codes-picker';

const TextInputForMobile = props => {
  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState('+91');
  const [flag, setFlag] = useState('');
  return (
    <TouchableOpacity
      onPress={() => setShow(true)}
      style={{
        flexDirection: 'row',
        height: moderateScaleVertical(48),
        marginBottom: moderateScaleVertical(20),
      }}>
      <View
        style={{
          height: moderateScaleVertical(48),
          marginVertical: moderateScaleVertical(20),
          marginRight: moderateScale(12),
          borderRadius: moderateScaleVertical(8),
          paddingHorizontal: moderateScale(12),
          backgroundColor: colors.white,
        }}>
        <Text
          style={{
            paddingTop: 15,
          }}>
          {flag} {countryCode}
        </Text>
      </View>
      <TextInputWithImage containerStyle={{flex: 1}} {...props} />
      <CountryPicker
        show={show}
        // when picker button press you will get the country object with dial code
        pickerButtonOnPress={item => {
          setFlag(item.flag);
          setCountryCode(item.dial_code);
          setShow(false);
        }}
      />
    </TouchableOpacity>
  );
};

export default TextInputForMobile;
