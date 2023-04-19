import {View, Text, Image, TouchableOpacity} from 'react-native';
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

const AddContact = props => {
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
        centerTitle={strings.addAnewContact}
        onPressLeft={() => navigation.goBack()}
      />
      <View
        style={{
          flex: 1,

          paddingHorizontal: moderateScale(16),
          // paddingVertical: moderateScaleVertical(24),
        }}>
        <TextInputWithImage
          containerStyle={{
            backgroundColor: colors.backGroundColor,
          }}
          onChangeText={onChangeText('name')}
          value={state.name}
          placeholder={strings.fullName}
        />
        <TextInputWithImage
          containerStyle={{
            backgroundColor: colors.backGroundColor,
            marginBottom: moderateScaleVertical(48),
          }}
          onChangeText={onChangeText('phone')}
          value={state.phone}
          placeholder={strings.phoneNumberOrEamil}
        />

        <ButtonWithIcon
          onPress={() => navigation.goBack()}
          text={strings.done}
        />
      </View>
    </WrapperContainer>
  );
};

export default AddContact;
