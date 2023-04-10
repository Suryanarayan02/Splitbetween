import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import colors from '../styles/colors';
import fontFamily from '../styles/fontFamily';
import {moderateScaleVertical, textScale} from '../styles/responsiveSize';

const MultiScreen = props => {
  const {
    screenName,
    mainViewStyle,
    selectedScreen,
    selectedScreenIndex,
    activeTintColor = colors.themeColor,
    inActiveTintColor = '#0000004b',
    borderWidth = 1,
    tabTextStyle,
  } = props;
  return (
    <View style={{...styles.mainView, ...mainViewStyle}}>
      {screenName.map((value, index) => {
        return (
          <TouchableOpacity key={index} onPress={() => selectedScreen(index)}>
            <Text
              style={[
                styles.activeContractTextStyle,
                tabTextStyle,
                {
                  textAlign: 'left',
                  color:
                    selectedScreenIndex === index
                      ? activeTintColor
                      : inActiveTintColor,
                },
              ]}>
              {value}
            </Text>
            <View
              style={{
                marginTop: moderateScaleVertical(5),
                borderWidth: selectedScreenIndex === index ? borderWidth : 0,
                borderColor: colors.themeColor,
                flex: 1,
              }}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default React.memo(MultiScreen);

const styles = StyleSheet.create({
  mainView: {
    borderBottomColor: colors.lightGrayColor,
    borderBottomWidth: 1,
    flexDirection: 'row',
    maxWidth: '100%',
    backgroundColor: colors.whiteColor,
    justifyContent: 'space-between',
    marginBottom: moderateScaleVertical(16),
  },
  activeContractTextStyle: {
    fontSize: textScale(16),
    color: colors.blackOpacity50,
    fontFamily: fontFamily.Urbanist_SemiBold,
    marginTop: moderateScaleVertical(20),
  },
});
