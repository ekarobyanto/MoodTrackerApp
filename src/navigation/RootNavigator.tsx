import React from 'react';
import {DefaultTemplate} from '../App';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import {StyleSheet} from 'react-native';
import {HomeScreen} from '../features/home/HomeScreen';
import {AppText} from '../components/AppText';
import {StatisticsScreen} from '../features/statistics/StatisticsScreen';

const Tab = createBottomTabNavigator();

interface ITabScreen {
  name: string;
  component: React.FC;
  tabBarIcon: ({color}: {color: string}) => React.ReactNode;
  options?: BottomTabNavigationOptions;
}

export const RootNavigator = () => {
  const tabs: ITabScreen[] = [
    {
      name: 'Home',
      component: HomeScreen,
      tabBarIcon: ({color}) => (
        <Feather name="home" style={styles.icon} color={color} />
      ),
    },
    {
      name: 'Statistics',
      component: StatisticsScreen,
      tabBarIcon: ({color}) => (
        <Feather name="pie-chart" style={styles.icon} color={color} />
      ),
    },
    {
      name: 'Settings',
      component: DefaultTemplate,
      tabBarIcon: ({color}) => (
        <Feather name="settings" style={styles.icon} color={color} />
      ),
    },
  ];

  return (
    <Tab.Navigator
      screenOptions={{
        unmountOnBlur: true,
        headerShown: false,
        tabBarInactiveTintColor: 'black',
        tabBarStyle: {
          boxShadow: '0px -1px 4px rgba(0, 0, 0, 0.1)',
        },
        tabBarLabel: ({color, children}) => (
          <AppText style={{color, fontSize: 12}}>{children}</AppText>
        ),
      }}>
      {tabs.map(tab => (
        <Tab.Screen
          key={tab.name}
          name={tab.name}
          component={tab.component}
          options={{
            tabBarIcon: tab.tabBarIcon,
            ...tab.options,
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  icon: {
    fontSize: 20,
  },
});
