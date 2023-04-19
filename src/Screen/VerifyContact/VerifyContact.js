import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState} from 'react';
import WrapperContainer from '../../Component/WrapperContainer';
import colors from '../../styles/colors';
import {
  moderateScale,
  moderateScaleVertical,
} from '../../styles/responsiveSize';
import imagePath from '../../constants/imagePath';
import HeaderComponent from '../../Component/HeaderComponent';
import strings from '../../constants/lang';
import TextInputWithImage from '../../Component/TextInputWithImage';
import ButtonWithIcon from '../../Component/ButtonWithIcon';
import navigationStrings from '../../navigation/navigationStrings';

const VerifyContact = props => {
  const {navigation} = props;
  const [state, setState] = useState({name: '', phone: ''});
  const updateState = data => setState(state => ({...state, ...data}));
  const onChangeText = key => value => updateState({[key]: value});
  return (
    <WrapperContainer bgColor={colors.white} statusBarColor={colors.white}>
      <HeaderComponent
        headerStyle={{
          borderBottomWidth: 1,
          borderBottomColor: colors.greyText,
          height: moderateScaleVertical(40),
        }}
        textStyle={{fontWeight: '500'}}
        leftIcon={imagePath.backWithouCircle}
        centerTitle={strings.verifyContactInfo}
        onPressLeft={() => navigation.goBack()}
      />
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        style={{
          flex: 1,
          paddingHorizontal: moderateScale(16),
        }}>
        {[
          {name: 'Suraj', phone: '1234567654'},
          {name: 'Suraj', phone: '1234567654'},
          {name: 'Suraj', phone: '1234567654'},
          {name: 'Suraj', phone: '1234567654'},
          {name: 'Suraj', phone: '1234567654'},
          {name: 'Suraj', phone: '1234567654'},
          {name: 'Suraj', phone: '1234567654'},
          {name: 'Suraj', phone: '1234567654'},
          {name: 'Suraj', phone: '1234567654'},
          {name: 'Suraj', phone: '1234567654'},
          {name: 'Suraj', phone: '1234567654'},
          {name: 'Suraj', phone: '1234567654'},
          {name: 'Suraj', phone: '1234567654'},
          {name: 'Suraj', phone: '1234567654'},
          {name: 'Suraj', phone: '1234567654'},
          {name: 'Suraj', phone: '1234567654'},
          {name: 'Suraj', phone: '1234567654'},
        ].map(item => (
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{
                borderRadius: moderateScale(24),
                backgroundColor: colors.backGroundColor,
                marginRight: moderateScale(12),
                height: moderateScale(44),
                width: moderateScale(44),
                marginVertical: moderateScale(12),
                alignItems: 'center',
                justifyContent: 'center',
                borderBottomColor: colors.backGroundColor,
                borderBottomWidth: 1,
              }}>
              <TouchableOpacity
                style={{position: 'absolute', top: -5, right: 0}}>
                <Image source={imagePath.closeInCircle} />
              </TouchableOpacity>
              <Text>{item.name[0]}</Text>
            </View>
            <View>
              <Text style={{fontWeight: '600'}}>{item.name}</Text>
              <Text style={{fontWeight: '600', color: colors.greyText}}>
                {item.phone}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>

      <Text
        style={{
          color: colors.greyText,
          // flex: 1,
          textAlign: 'center',
          marginVertical: moderateScaleVertical(24),
        }}>
        {strings.thesePeoplewillnotifiedyou}
      </Text>
      <ButtonWithIcon
        onPress={() => navigation.navigate(navigationStrings.HOME)}
        containerStyle={{marginHorizontal: moderateScale(16)}}
        text={strings.finish}
      />
    </WrapperContainer>
  );
};

export default VerifyContact;
