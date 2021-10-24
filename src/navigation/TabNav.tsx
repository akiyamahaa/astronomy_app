import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icons } from 'components/Icons';
import React from 'react';
import AboutScreen from 'screens/about/AboutScreen';
import HomeScreen from 'screens/home/HomeScreen';

interface Props {}

const Tab = createBottomTabNavigator();

const TabArr = [
  {
    route: 'Home',
    label: 'Home',
    type: Icons.Ionicons,
    activeIcon: 'grid',
    inActiveIcon: 'grid-outline',
    component: HomeScreen,
  },
  {
    route: 'Category',
    label: 'Category',
    type: Icons.MaterialCommunityIcons,
    activeIcon: 'heart-plus',
    inActiveIcon: 'heart-plus-outline',
    component: AboutScreen,
  },
];

const TabNav = (props: Props) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* {TabArr.map((item, index) => (
        <Tab.Screen name={item.route} component={item.component} 
        options={{tabBarShowLabel:false,
        tabBarIcon:({color,focused}) => (
        )}}
        />
      ))} */}
    </Tab.Navigator>
  );
};

export default TabNav;
