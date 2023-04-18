import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
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

const CreateGroup = props => {
  const {navigation} = props;
  const [groupName, setGroupName] = useState('');

  const onChangeText = value => {
    setGroupName(value);
  };
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
        centerTitle={strings.createAGroup}
        onPressLeft={() => navigation.goBack()}
      />
      <View
        style={{
          flex: 1,
          paddingHorizontal: moderateScale(16),
          // paddingVertical: moderateScaleVertical(24),
        }}>
        <TouchableOpacity
          style={{
            padding: moderateScale(30),
            backgroundColor: colors.backGroundColor,
            borderColor: colors.themeColor,
            borderWidth: 1,
            borderRadius: moderateScale(6),
            alignItems: 'center',
            alignSelf: 'center',
            marginVertical: moderateScaleVertical(24),
          }}>
          <Image
            source={imagePath.camera}
            style={{tintColor: colors.themeColor}}
          />
        </TouchableOpacity>
        <TextInputWithImage
          onChangeText={onChangeText}
          value={groupName}
          containerStyle={{
            borderWidth: 1,
            borderColor: colors.themeColor,
            backgroundColor: colors.backGroundColor,
          }}
          placeholder={strings.groupName}
        />

        <View style={{flex: 0.5}}>
          <Text
            style={{
              marginVertical: moderateScaleVertical(14),
              color: colors.black,
            }}>
            {strings.type}
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {[
              {name: 'Trip', image: imagePath.homeOff},
              {name: 'Home', image: imagePath.heartOff},
              {name: 'Couple', image: imagePath.planeOff},
              {name: 'trip', image: imagePath.planeOff},
              {name: 'trip', image: imagePath.homeOff},
              {name: 'trip', image: imagePath.heartOff},
              {name: 'trip', image: imagePath.homeOff},
            ].map(item => (
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  padding: moderateScale(6),
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: moderateScaleVertical(34),
                  borderRadius: moderateScale(6),
                  marginRight: moderateScale(12),
                  backgroundColor: colors.backGroundColor,
                }}>
                <Image
                  style={{marginRight: moderateScale(8)}}
                  source={item.image}
                />
                <Text>{item.name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <ButtonWithIcon text={strings.done} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          padding: moderateScale(16),
        }}>
        <Image source={imagePath.groupOrange} />
        <Text style={{flex: 1, marginLeft: moderateScale(8)}}>
          {groupName ? groupName : strings.groupName}
        </Text>
        <Image source={imagePath.calender} />
        <Image source={imagePath.camera} />
        <Image source={imagePath.note} />
      </View>
    </WrapperContainer>
  );
};

export default CreateGroup;
