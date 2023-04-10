import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  Pressable,
  Modal,
  TouchableOpacity,
  ScrollView,
  Keyboard,
} from "react-native";
import imagePath from "../constants/imagePath";
import colors from "../styles/colors";
import commonStyles from "../styles/commonStyles";
import fontFamily from "../styles/fontFamily";
import { height, moderateScale, moderateScaleVertical } from "../styles/responsiveSize";
const DropDown = (props) => {
  const {
    value,
    dropDownValuesHandler,
    placeHolder,
    optionData,
    fix,
    right,
    container,
    defaultValue,
  } = props;
  /************************** User Sate
   */ const [showOptions, setShowOptions] = useState(false);


  //console.log("otpn data", optionData)
  const valueHandler = (data) => {
    setShowOptions(false);
    dropDownValuesHandler(data);
  };
  const modalHandler = () => {
    return (
      <Modal
        onRequestClose={() => setShowOptions(false)}
        transparent={true}
        visible={showOptions}
        animationType={"none"}
      >
        <TouchableOpacity
          activeOpacity={0.8}
          // hitSlop={hitSlopProp}
          onPress={() => setShowOptions(false)}
          style={styles.modalCont}
        >
          {renderDorpDownData()}
        </TouchableOpacity>
      </Modal>
    );
  };
  const renderDorpDownData = () => {
    return (
      <View style={[styles.mainDataCont]}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            backgroundColor: colors.white,
            borderRadius: 8,
            paddingHorizontal: 10
          }}
        >
          <Text style={{
            ...commonStyles.fontSize14Regular,
            alignSelf: 'center',
            paddingVertical: 8
          }}>Change Prodcut unit</Text>
          {optionData.map((x, i) => (
            <View key={String(i)}
              style={{ zIndex: 99999, borderBottomWidth: 1, borderColor: colors.borderColor, }}
            >
              <TouchableOpacity
                onPress={() => valueHandler(x.name)}
                activeOpacity={1}
                style={[
                  styles.datCont,
                  {
                    // borderBottomWidth: optionData.length - 1 == i ? 2 : 0,
                    backgroundColor: value - 1 == i ? colors.themeColorLight : colors.white
                  },
                ]}
              >
                <Text style={{
                  ...styles.dataTxt,
                  color: value - 1 == i ? colors.themeColor : colors.black,
                  fontFamily: value - 1 == i ? fontFamily.bold : fontFamily.regular
                }}>{x.name}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  };
  return (
    <View style={{ flex: 1 }}>
      <Pressable
        onPress={() => {
          Keyboard.dismiss();
          setShowOptions(!showOptions);
        }}
        style={{...styles.container, ...container}}
      >
        <View >
          <Text
            style={{
              ...styles.txtStyle,
              color: value ? colors.black : colors.textGreyOpacity73,
            }}
          >
            {value ? value : defaultValue}
          </Text>
        </View>
        <View>
          <Image source={imagePath.dropDown} />
        </View>
      </Pressable>
      <View
        style={{
          alignItems: "center",
        }}
      >
        {modalHandler()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: moderateScaleVertical(24),
    paddingHorizontal: moderateScale(12),
    ...commonStyles.border,
    // backgroundColor: colors.themeColorLightest,
    height: moderateScaleVertical(48),
  },
  txtStyle: {
    ...commonStyles.fontSize12Regular,
    paddingTop: moderateScaleVertical(12),
    fontSize: 16,
  },
  dataTxt: {
    ...commonStyles.fontSize14Regular,
    zIndex: 999999,
    textAlign: "center",
  },
  datCont: {
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: colors.white,
    paddingHorizontal: 16
  },
  mainDataCont: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 15,
    // width: "100%",
    // alignItems: "center",
    // justifyContent: "center",
    // maxHeight: 350,
    flex: 1,
    borderWidth: 2,
    borderRadius: 6,
    borderColor: colors.borderColor,
    maxHeight: '100%',
    position: 'absolute'
  },
  modalCont: {
    // width: width,
    height: height,
    borderColor: colors.textGreyOpacity73,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },
});

export default React.memo(DropDown);
