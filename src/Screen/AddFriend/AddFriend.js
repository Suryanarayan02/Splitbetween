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

const AddFriend = props => {
  const {navigation} = props;
  const [name, setName] = useState('');
  const onChangeText = value => setName(value);
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
        centerTitle={strings.addFreind}
        onPressLeft={() => navigation.goBack()}
      />

      <View>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          style={{
            padding: moderateScale(16),
            borderBottomWidth: 1,
            borderColor: colors.backGroundColor,
          }}
          horizontal>
          {[{name: 'S'}, {name: 'S'}].map(item => (
            <View
              style={{
                borderRadius: moderateScale(24),
                backgroundColor: colors.backGroundColor,
                marginRight: moderateScale(12),
                height: moderateScale(44),
                width: moderateScale(44),
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <TouchableOpacity
                style={{position: 'absolute', top: -5, right: 0}}>
                <Image source={imagePath.closeInCircle} />
              </TouchableOpacity>
              <Text>{item.name}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
      <View
        style={{
          flex: 1,
          paddingHorizontal: moderateScale(16),
          // paddingVertical: moderateScaleVertical(24),
        }}>
        <TextInputWithImage
          onChangeText={onChangeText}
          containerStyle={{backgroundColor: colors.backGroundColor}}
          value={name}
          placeholder={strings.enterNameMailOrPhone}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate(navigationStrings.ADDCONTACT)}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: moderateScale(12),
          }}>
          <Image
            style={{marginRight: moderateScale(8)}}
            source={imagePath.addFriendCircle}
          />
          <Text>{strings.addANewContactToSplit}</Text>
        </TouchableOpacity>
        <Text>{strings.fromYourContacts}</Text>
        <Image source={imagePath.emptyGraphic} />
        <Text
          style={{
            textAlign: 'center',
            // marginVertical: moderateScaleVertical(8),
          }}>
          {strings.allowSplitbetweentoaccess}
        </Text>
        <ButtonWithIcon text={strings.allowcontactAccess} />
        <TouchableOpacity
          onPress={() => navigation.navigate(navigationStrings.VERIFYCONTACT)}
          style={{alignItems: 'flex-end'}}>
          <Image source={imagePath.next} />
        </TouchableOpacity>
      </View>
    </WrapperContainer>
  );
};

export default AddFriend;
