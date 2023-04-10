import LocalizedStrings from 'react-native-localization';
import english from './english';
import hindi from './hindi';

let strings = new LocalizedStrings({
  english: english,
  hindi: hindi,
});
export default strings;
