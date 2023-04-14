import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from '../Screen';
import navigationStrings from './navigationStrings';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name={navigationStrings.HOME} component={Home} />
      <Tab.Screen name={navigationStrings.SETTING} component={Home} />
    </Tab.Navigator>
  );
}
