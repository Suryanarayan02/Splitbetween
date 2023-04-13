import React, {useEffect} from 'react';
import FlashMessage from 'react-native-flash-message';
import {Provider} from 'react-redux';
import Routes from './src/navigation/Route';
import store from './src/redux/store';
import fontFamily from './src/styles/fontFamily';
import {moderateScale} from './src/styles/responsiveSize';
import SplashScreen from 'react-native-splash-screen';
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Provider store={store}>
      <Routes />
      <FlashMessage
        titleStyle={{
          paddingTop: moderateScale(5),
          marginRight: moderateScale(5),
          fontFamily: fontFamily.semibold,
          fontSize: moderateScale(14),
        }}
        textStyle={{}}
        position="top"
        duration={5000}
      />
    </Provider>
  );
};

export default App;

if (!__DEV__) {
  console.log = () => {};
}
