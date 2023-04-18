import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Account, Activity, Friends, Groups, Home} from '../Screen';
import navigationStrings from './navigationStrings';
import {Text, Image} from 'react-native';
import imagePath from '../constants/imagePath';
import colors from '../styles/colors';
const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {fontSize: 12},
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({color, focused, size}) => (
            <Image source={focused ? imagePath.groupOn : imagePath.groupOff} />
          ),
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                color: focused ? colors.themeColor : colors.greyText,
              }}>
              {navigationStrings.GROUPS}
            </Text>
          ),
        }}
        name={navigationStrings.GROUPS}
        component={Groups}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, focused, size}) => (
            <Image
              source={focused ? imagePath.friendsOn : imagePath.friendsOff}
            />
          ),
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                color: focused ? colors.themeColor : colors.greyText,
              }}>
              {navigationStrings.FRIENDS}
            </Text>
          ),
        }}
        name={navigationStrings.FRIENDS}
        component={Friends}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, focused, size}) => (
            <Image
              source={focused ? imagePath.activityOn : imagePath.activityOff}
            />
          ),
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                color: focused ? colors.themeColor : colors.greyText,
              }}>
              {navigationStrings.ACTIVITY}
            </Text>
          ),
        }}
        name={navigationStrings.ACTIVITY}
        component={Activity}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, focused, size}) => (
            <Image source={imagePath.account} />
          ),
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                color: focused ? colors.themeColor : colors.greyText,
              }}>
              {navigationStrings.ACCOUNT}
            </Text>
          ),
        }}
        name={navigationStrings.ACCOUNT}
        component={Account}
      />
    </Tab.Navigator>
  );
}
