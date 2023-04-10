// import AsyncStorage from '@react-native-community/async-storage';

import {showMessage} from 'react-native-flash-message';
// import RNFetchBlob from 'rn-fetch-blob';
import {PermissionsAndroid, Alert, Platform, Linking} from 'react-native';
// import moment from "moment";
// const getLocalUserData = () => AsyncStorage.getItem('userData').then((data) => JSON.parse(data));
// const setLocalUserData = (data) => AsyncStorage.setItem('userData', JSON.stringify(data));
// const deleteLocalUserData = () => AsyncStorage.removeItem('userData');
// const getDeviceToken = (data) => AsyncStorage.getItem('deviceToken').then((data) => data);
// const setDeviceToken = (data) => AsyncStorage.setItem('deviceToken', data)
// const deleteDeviceToken = () => AsyncStorage.removeItem('deviceToken');

const showError = message => {
  // console.log(message);
  // console.log(showMessage, 'reh; message');
  showMessage({
    type: 'danger',
    icon: 'danger',
    message,
  });
};

const showInfo = message => {
  // console.log(message);
  // console.log(showMessage, 'reh; message');
  showMessage({
    type: 'info',
    icon: 'info',
    message,
  });
};
const showSuccess = message => {
  showMessage({
    type: 'success',
    icon: 'success',
    message,
  });
};

// const downloadData = async url => {
//   if (Platform.OS == 'ios') {
//     Linking.openURL(url);
//     return;
//   }

//   const pr = await PermissionsAndroid.request(
//     PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
//   );
//   if (pr == 'granted') {
//     showMessage({
//       type: 'info',
//       icon: 'info',
//       message: 'Downloading Started...',
//     });
//     var date = new Date();
//     var url = url;
//     var ext = extention(url);
//     ext = '.' + ext[0];
//     const {config, fs} = RNFetchBlob;

//     let options = {
//       // fileCache: true,
//       addAndroidDownloads: {
//         useDownloadManager: true,
//         notification: true,
//         // path:  fs.dirs.DownloadDir + "/image_"+Math.floor(date.getTime() + date.getSeconds() / 2)+ext,
//         // description : 'Image'
//       },
//     };
//     config(options)
//       .fetch('GET', url)
//       .then(res => {
//         //   Alert.alert("Success Downloaded");
//       })
//       .catch(error => {
//         // console.log(error.messag);
//       });
//   } else {
//     // alert(pr)
//   }
// };


// export function downloadText(){
//   const text = Platform.OS=="ios" ? 'Open' : 'Download';
  
//   return text;
// }

// export function extention(filename) {
//   return /[.]/.exec(filename) ? /[^.]+$/.exec(filename) : undefined;
// }

// export function getPriceTypeText(price_type) {
//   return price_type == 'fixed_installments'
//     ? 'Fixed Installments'
//     : 'Fixed Budget';
// }

export function dialCall(phoneNumber) {
  

  if (Platform.OS === 'android') {
    phoneNumber = `tel:${phoneNumber}`;
  } else {
    phoneNumber = `telprompt:${phoneNumber}`;
  }

  Linking.openURL(phoneNumber);
}

// export function checkDiffDay(item) {
//   var currentTime = moment();
//   var timeStore = moment(item);
  
//   return timeStore.diff(currentTime, 'd');
// }

export {
  // getLocalUserData,
  // setLocalUserData,
  // deleteLocalUserData,
  // getDeviceToken,
  // setDeviceToken,
  // deleteDeviceToken,
  showError,
  showSuccess,
  // downloadData,
  showInfo
};
