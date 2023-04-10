import axios from 'axios';
import {PermissionsAndroid, Platform} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
// import firebase from 'react-native-firebase';
// import NavigationService from '../router/NavigationService';
// import store from '../redux/store';
// import types from '../redux/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {showError} from './helperFunctions';
export async function getHeaders() {
  let userData = await getUserData()
  console.log(userData,"uuuuuuuuuuuuuuuuuuuuuuuuuuu---------------------------------------------------")
  if (userData && userData?.token) {
    // userData = JSON.parse(userData);
    // console.log(userData, "userdate")
    return {
      authorization: `Token ${userData.token}`,
    };
  }
  return {};
}

export function setUserData(data) {
  data = JSON.stringify(data);
  console.log(data, 'hello')
  return AsyncStorage.setItem('userData', data);
}

export function setItem(key, data) {
  data = JSON.stringify(data);
  return AsyncStorage.setItem(key, data);
}

export function getItem(key) {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(key).then(data => {
      resolve(JSON.parse(data));
    });
  });
}

export function removeItem(key) {
  return AsyncStorage.removeItem(key);
}

export function clearAsyncStorate(key) {
  return AsyncStorage.clear();
}

export async function getUserData() {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem('userData').then(data => {
      resolve(JSON.parse(data));
    });
  });
}

export async function clearUserData() {
  return AsyncStorage.removeItem('userData');
}

export async function apiReq(
  endPoint,
  data,
  method,
  headers,
  requestOptions = {},
) {
  console.log('ENDPOINT : ', endPoint);
  console.log('DATA : ', data);
  return new Promise(async (res, rej) => {
    const getTokenHeader = await getHeaders();
    headers = {
      ...getTokenHeader,
      ...headers,
    };
    console.log(headers, 'thi sis header');
    if (method === 'get' || method === 'delete') {
      data = {
        ...requestOptions,
        ...data,
        headers,
      };
    }

    axios[method](endPoint, data, {headers})
      .then(result => {
        console.log(endPoint, 'thejlj');
        const {data} = result;

        if (data.status === false) {
          return rej(data);
        }

        return res(data);
      })
      .catch(error => {
        console.log('Request Error: ', error);
        // console.log(error&&error.response,'the error respne')
        if (error && error.response && error.response.status === 401) {
          clearUserData();
          // NavigationService.resetNavigation());
          // NavigationService.navigate('onBoardScreen');
          // const {dispatch} = store;
          // dispatch({
          //   type: types.CLEAR_REDUX_STATE,
          //   payload: {},
          // });
        }
        if (error && error.response && error.response.data) {
          if (!error.response.data.msg) {
            return rej({
              ...error.response.data,
              msg: error.response.data.message || 'Network Error',
            });
          }
          return rej(error.response.data);
        } else {
          return rej({message: 'Network Error', msg: 'Network Error'});
        }
        return rej(error);
      });
  });
}

export function apiPost(endPoint, data, headers = {}) {
  return apiReq(endPoint, data, 'post', headers);
}

export function apiDelete(endPoint, data, headers = {}) {
  return apiReq(endPoint, data, 'delete', headers);
}

export function apiGet(endPoint, data, headers = {}, requestOptions) {
  return apiReq(endPoint, data, 'get', headers, requestOptions);
}

export function apiPut(endPoint, data, headers = {}) {
  return apiReq(endPoint, data, 'put', headers);
}
export function apiPatch(endPoint, data, headers = {}) {
  return apiReq(endPoint, data, 'patch', headers);
}
export function randomString(len = 5) {
  let text = '';
  const possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < len; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
}

// export async function getToken() {
//   let fcmToken = await AsyncStorage.getItem('fcmToken');
//   console.log(fcmToken, 'the old fxa');
//   if (!fcmToken) {
//     try {
//       fcmToken = await firebase.messaging().getToken();
//       if (fcmToken) {
//         console.log(fcmToken, 'the new genrated');
//         await AsyncStorage.setItem('fcmToken', fcmToken);
//       }
//     } catch (error) {
//       console.log(error, 'the error');
//     }
//   }
// }

//2
// export async function requestPermission() {
//   console.log('hi')
//   try {
//     console.log('hello')
//     await firebase.messaging().requestPermission();
//     // User has authorised
//     this.getToken();
//   } catch (error) {
//     // User has rejected permissions
//       console.log('permission rejected');
//   }
// }

function getWeekDays(locale) {
  const baseDate = new Date(Date.UTC(2019, 8, 30)); // just a Monday

  const weekDays = [];
  for (let i = 0; i < 7; i++) {
    weekDays.push(baseDate.toLocaleDateString(locale, {weekday: 'long'}));
    baseDate.setDate(baseDate.getDate() + 1);
  }
  return weekDays;
}

// const weekDays = getWeekDays('ar');

// console.log('\n\n week days: ', weekDays);
export const androidCameraPermission = () =>
  new Promise(async (resolve, reject) => {
    try {
      if (Platform.OS === 'android' && Platform.Version > 22) {
        const granted = await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.CAMERA,
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        ]);
        // console.log(granted,'hte aojfoj')

        if (
          granted['android.permission.CAMERA'] !== 'granted' ||
          granted['android.permission.WRITE_EXTERNAL_STORAGE'] !== 'granted' ||
          granted['android.permission.READ_EXTERNAL_STORAGE'] !== 'granted'
        ) {
          showError("Don't have required permission.Please allow permissions");
          return resolve(false);
          // alert(strings.DO_NOT_HAVE_PERMISSIONS_TO_SELECT_IMAGE);
        }
        return resolve(true);
      }

      return resolve(true);
    } catch (error) {
      return resolve(false);
    }
  });

export const locationPermission = () =>
  new Promise(async (resolve, reject) => {
    if (Platform.OS === 'ios') {
      try {
        const permissionStatus = await Geolocation.requestAuthorization(
          'whenInUse',
        );
        if (permissionStatus === 'granted') {
          return resolve('granted');
        }
        reject('Permission not granted');
      } catch (error) {
        return reject(error);
      }
    } else {
      return PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      )
        .then(granted => {
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            //console.log('You can use the location');
            return resolve('granted');
          }
          //console.log('Location permission denied');
          else {
            return reject('Location permission denied');
          }
        })
        .catch(error => {
          console.log('Ask Location permission error: ', error);
          return reject(error);
        });
    }
  });
