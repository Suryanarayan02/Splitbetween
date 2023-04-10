import React, { Component } from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView
} from 'react-native';

//Common components and helper methods 
// import { TabImages } from '../../constants/ImagesPath';  
import colors from '../styles/colors';
 import fontFamily from '../styles/fontFamily';
import { moderateScale, moderateScaleVertical, textScale } from '../styles/responsiveSize';


export default class TabComponent extends Component {
  constructor() {
    super();
    this.state = {
      tabName: [
        "Home",
        "Jobs",
        "Explore",
        "Inbox",
        "Alerts"
      ]
    }
  }

  render() {
    const navigation = this.props.navigation;
    const { routes, index } = this.props.navigation.state;
    return (
      <SafeAreaView style={styles.tabContainer}  >
        {routes.map((route, idx) => {
          const color = index === idx ? colors.themeColor : colors.black;
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(route.routeName);
              }}
              style={styles.tab}
              key={route.routeName}
            >
              {index === idx ?
              <View>
                <View style={styles.upperRadius}/>
                 {/* <Image source={TabImages.selected[idx]} /> */}
              </View>
                :
                <View>
                 {/* <Image source={TabImages.unselected[idx]} /> */}
              </View>
              }
              <Text style={{ color, fontSize:textScale(12)}}>
                {this.props.tabName[idx]}
              </Text>
            </TouchableOpacity>
          );
        })}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    height:moderateScaleVertical(30),
    backgroundColor: colors.white,
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(2),
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height:moderateScale(2)},
    shadowOpacity: 0.8,
    shadowRadius: moderateScale(2),

  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(2)
  },
  upperRadius: {
    position: 'absolute',
    backgroundColor:colors.themeColor,
    alignSelf: 'center',
    top: -moderateScaleVertical(25), 
    height: moderateScaleVertical(20),
    paddingHorizontal: moderateScale(20),
   borderTopRightRadius: moderateScaleVertical(20),
   borderTopLeftRadius: moderateScaleVertical(20)
  },
});