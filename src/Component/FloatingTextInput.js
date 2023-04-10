// import React, {Component} from 'react';
// import {View, StatusBar, TextInput, Animated, StyleSheet} from 'react-native';
// import imagePath from '../constants/imagePath';
// import colors from '../styles/colors';
// import commonStyles from '../styles/commonStyles';
// import {moderateScale, moderateScaleVertical} from '../styles/responsiveSize';

// class FloatingTextInput extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isFocused: false,
//       height: null,
//     };
//     this._animatedIsFocused = new Animated.Value(
//       this.props.value === '' ? 0 : 1,
//     );
//   }

//   handleFocus = () => this.setState({isFocused: true});
//   handleBlur = () => this.setState({isFocused: false});

//   componentDidUpdate() {
//     Animated.timing(this._animatedIsFocused, {
//       toValue: this.state.isFocused || this.props.value !== '' ? 1 : 0,
//       duration: 200,
//       useNativeDriver: false,
//     }).start();
//   }

//   onContentSizeChange = event => {
//     this.setState({
//       height: event.nativeEvent.contentSize.height,
//     });
//   };

//   render() {
//     const {
//       label,
//       containerStyle,
//       sizeChange = false,
//       textInputStyle,
//       image,
//       ...props
//     } = this.props;
//     const labelStyle = {
//       fontSize: this._animatedIsFocused.interpolate({
//         inputRange: [0, 1],
//         outputRange: [17, 14],
//       }),
//       color: this._animatedIsFocused.interpolate({
//         inputRange: [0, 1],
//         outputRange: [colors.placeHolderColor, colors.themeColor],
//       }),
//     };
//     const container = {
//       flexDirection: 'row',
//       position: 'absolute',
//       left: moderateScale(12),
//       top: this._animatedIsFocused.interpolate({
//         inputRange: [0, 1],
//         outputRange: [8, -12],
//       }),
//     };
//     const iconStyle = {
//       marginRight: moderateScale(4),
//       alignSelf: 'center',
//       // height: this._animatedIsFocused.interpolate({
//       //   inputRange: [0, 1],
//       //   outputRange: [26, 14],
//       // }),
//       tintColor: this._animatedIsFocused.interpolate({
//         inputRange: [0, 1],
//         outputRange: [colors.placeHolderColor, colors.themeColor],
//       }),
//     };
//     return (
//       <View
//         style={{
//           borderWidth: 1,
//           borderColor:
//             this.state.isFocused || this.props.value
//               ? colors.themeColor
//               : colors.borderColor,
//           borderRadius: moderateScaleVertical(4),
//           paddingLeft: moderateScale(12),
//           // backgroundColor: colors.themeColorLightest,
//           height:
//             moderateScaleVertical(48) > this.state.height
//               ? moderateScaleVertical(48)
//               : this.state.height,
//           justifyContent: 'center',
//           ...containerStyle,
//         }}>
//         <Animated.View style={container}>
//           <Animated.View
//             style={{
//               // bottom: 0,
//               backgroundColor: colors.white,
//               position: 'absolute',
//               height: '100%',
//               width: '100%',
//             }}
//           />
//           <Animated.Image style={iconStyle} source={image?image:null} />
//           <Animated.Text style={labelStyle}>{label}</Animated.Text>
//         </Animated.View>
//         <TextInput
//           {...props}
//           onContentSizeChange={this.onContentSizeChange}
//           style={{
//             ...styles.textInput,
//             ...textInputStyle,
//             paddingTop:this.props.multiline? moderateScaleVertical(12):0,
//             height: this.state.height,
//           }}
//           onFocus={this.handleFocus}
//           onBlur={this.handleBlur}
//           blurOnSubmit
//         />
//       </View>
//     );
//   }
// }

// export default FloatingTextInput ;

// const styles = StyleSheet.create({
//   textInput: {
//     paddingVertical: 0,
//     ...commonStyles.fontSize12Regular,
//     color: colors.black,
//   },
// });






import React, {Component} from 'react';
import {View, StatusBar, TextInput, Animated, StyleSheet} from 'react-native';
import colors from '../styles/colors';
import commonStyles from '../styles/commonStyles';
import { moderateScale, moderateScaleVertical } from '../styles/responsiveSize';
class FloatingTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocused: false,
      height: null,
    };
    this._animatedIsFocused = new Animated.Value(
      this.props.value === '' ? 0 : 1,
    );
  }

  handleFocus = () => this.setState({isFocused: true});
  handleBlur = () => this.setState({isFocused: false});

  componentDidUpdate() {
    Animated.timing(this._animatedIsFocused, {
      toValue: this.state.isFocused || this.props.value !== '' ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }

  onContentSizeChange = event => {
    this.setState({
      height: event.nativeEvent.contentSize.height,
    });
  };

  render() {
    const {
      label,
      containerStyle,
      sizeChange = false,
      textInputStyle,
      image,
      ...props
    } = this.props;
    const labelStyle = {
      fontSize: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [17, 14],
      }),
      color: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [colors.placeHolderColor, colors.themeColor],
      }),
    };
    const container = {
      flexDirection: 'row',
      position: 'absolute',
      left: moderateScale(12),
      top: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [8, -12],
      }),
    };
    const iconStyle = {
      marginRight: moderateScale(4),
      alignSelf: 'center',
      // height: this._animatedIsFocused.interpolate({
      //   inputRange: [0, 1],
      //   outputRange: [26, 14],
      // }),
      tintColor: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [colors.placeHolderColor, colors.themeColor],
      }),
    };
    return (
      <View
        style={{
          borderColor:
            this.state.isFocused || this.props.value
              ? colors.themeColor
              : colors.borderColor,
          ...styles.mainContainer,
          height:
            moderateScaleVertical(48) > this.state.height
              ? moderateScaleVertical(48)
              : this.state.height,
          ...containerStyle,
        }}>
        <Animated.View style={container}>
          <Animated.View style={styles.labelContainer} />
          <Animated.Image style={iconStyle} source={image ? image : null} />
          <Animated.Text style={labelStyle}>{label}</Animated.Text>
        </Animated.View>
        <TextInput
          {...props}
          onContentSizeChange={this.onContentSizeChange}
          style={{
            ...styles.textInput,
            ...textInputStyle,
            paddingTop: this.props.multiline ? moderateScaleVertical(12) : 0,
            height: this.state.height,
          }}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          blurOnSubmit
        />
      </View>
    );
  }
}

export default FloatingTextInput;

const styles = StyleSheet.create({
  labelContainer: {
    backgroundColor: colors.white,
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  mainContainer: {
    borderWidth: 1,
    marginTop: moderateScaleVertical(24),
    borderRadius: moderateScaleVertical(4),
    paddingLeft: moderateScale(12),
    justifyContent: 'center',
  },
  textInput: {
    flex: 1,
    paddingVertical: 0,
    ...commonStyles.fontSize12Regular,
    color: colors.black,
  },
});
