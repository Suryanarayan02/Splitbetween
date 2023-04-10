import React from 'react';
import {View, Text} from 'react-native';
import ReactNativeModal from 'react-native-modal';
import colors from '../styles/colors';
import commonStyles from '../styles/commonStyles';
import {moderateScale, moderateScaleVertical} from '../styles/responsiveSize';
import ButtonWithIcon from './ButtonWithIcon';

const SortModal = props => {
  const {
    button=true,
    isVisible,
    onPressApply = () => {},
    toggleModal,
    headerText = 'Sort By',
    position = 'absolute',
    children,
  } = props;
  return (
    <ReactNativeModal
      animationInTiming={500}
      isVisible={isVisible}
      onBackdropPress={toggleModal}
      onBackButtonPress={toggleModal}
      style={{margin: 0}}>
      <View
        style={{
          backgroundColor: colors.white,
          padding: moderateScaleVertical(16),
          minHeight: moderateScaleVertical(220),
          position: position,
          bottom: 0,
          width: '100%',
          borderRadius: moderateScale(12),
        }}>
        <Text
          style={{
            ...commonStyles.fontSize14Bold,
            borderBottomColor: colors.borderColor,
            borderBottomWidth: moderateScale(1),
            marginBottom: moderateScaleVertical(12),
          }}>
          {headerText}
        </Text>
        {children}
        {button&&
          <ButtonWithIcon
          text="Apply"
          onPress={onPressApply}
          textStyle={{
            ...commonStyles.gradientButtonText,
            color: colors.themeColor,
          }}
          containerStyle={{
            borderRadius: moderateScale(4),
            marginVertical: moderateScaleVertical(20),
          }}
        />
        }
      </View>
    </ReactNativeModal>
  );
};

export default React.memo(SortModal);
