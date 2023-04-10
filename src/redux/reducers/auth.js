import types from '../types';

const initialState = {
  userData: {},
  langData: 'english',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.LOGIN: {
      const data = action.payload;
      return {
        ...state,
        userData: data,
      };
    }
    case types.SIGNUP: {
      const data = action.payload;
      return {...state, userData: data};
    }
    case types.LANG_UPDATE: {
      const data = action.payload;
      return {...state, langData: data};
    }

    default: {
      return state;
    }
  }
}
