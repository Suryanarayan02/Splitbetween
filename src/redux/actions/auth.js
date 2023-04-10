import {apiPost, getItem, setItem, setUserData} from '../../utils/utils';
import store from '../store';
import types from '../types';
// import RNRestart from 'react-native-restart';
import {USER_REGISTER, LOGIN, UPDATE_USER} from '../../config/urls';
import strings from '../../constants/lang/index';
const {dispatch} = store;

export const language = data =>
  dispatch({
    type: types.LANG_UPDATE,
    payload: data,
  });
export const registerUser = data => apiPost(USER_REGISTER, data);
export const login = data => apiPost(LOGIN, data);
export const updateUser = (data = {}) => apiPost(UPDATE_USER, data);

export const setLanguage = data => {
  strings.setLanguage(data);
  setItem('language', data)
    .then(res => {
      // RNRestart.Restart();
    })
    .catch(err => console.log(err));
};

export const saveUserData = (data = {}) =>
  setUserData(data)
    .then(res =>
      dispatch({
        type: types.SIGNUP,
        payload: data,
      }),
    )
    .catch(err => console.log(err));

export const userData = data =>
  dispatch({
    type: types.SIGNUP,
    payload: data,
  });
