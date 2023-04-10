import React from 'react';
import {View, Text, Modal} from 'react-native';
import {Bars} from 'react-native-loader';
import colors from '../styles/colors';
const Loader = ({isLoading = false, loaderColor = colors.themeColor}) => {
  return (
    <Modal visible={isLoading} transparent>
      <View
        style={{
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          width: '100%',
          height: '100%',
          elevation: 4,
          backgroundColor: 'rgba(0,0,0,0.3)',
        }}>
        <Bars size={14} color={loaderColor} />
      </View>
    </Modal>
  );
};

export default Loader;
