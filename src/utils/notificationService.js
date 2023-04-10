import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';
import actions from '../redux/actions';

export const checkPermission = async () => {
  const enabled = await messaging().hasPermission();
  if (enabled) {
    getToken();
  } else {
    requestPermission();
  }
};

export const getToken = async () => {
  let fcmToken = await AsyncStorage.getItem('fcmToken');
  if (!fcmToken) {
    try {
      fcmToken = await messaging().getToken();
    } catch (error) {}
  }
  if (fcmToken) {
    actions.saveFcmToken(fcmToken);
    await AsyncStorage.setItem('fcmToken', fcmToken);
  }
};

export const requestPermission = async () => {
  try {
    await messaging().requestPermission();
    // User has authorised
    getToken();
  } catch (error) {
    // User has rejected permissions
    console.log('permission rejected');
  }
};
