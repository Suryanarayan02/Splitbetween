import {View, Text, Image} from 'react-native';
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

const AddFriend = props => {
  const {navigation} = props;
  const [name, setName] = useState('');
  const onChangeText = value => setName(value);
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
        textStyle={{fontWeight: '500'}}
        leftIcon={imagePath.backWithouCircle}
        centerTitle={strings.addFreind}
        onPressLeft={() => navigation.goBack()}
      />
      <View
        style={{
          flex: 1,
          paddingHorizontal: moderateScale(16),
          // paddingVertical: moderateScaleVertical(24),
        }}>
        <TextInputWithImage
          onChangeText={onChangeText}
          value={name}
          placeholder={strings.enterNameMailOrPhone}
        />
        <View
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
        </View>
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
      </View>
    </WrapperContainer>
  );
};

export default AddFriend;
