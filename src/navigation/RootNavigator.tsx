import React from 'react';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import {StyleSheet} from 'react-native';
import {HomeScreen} from '../features/home/HomeScreen';
import {AppText} from '../components/AppText';
import {StatisticsScreen} from '../features/statistics/StatisticsScreen';
import {SettingsScreen} from '../features/settings/SettingsScreen';

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
      options: {
        headerShown: true,
        headerTitle: 'Statistics',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    },
    {
      name: 'Settings',
      component: SettingsScreen,
      tabBarIcon: ({color}) => (
        <Feather name="settings" style={styles.icon} color={color} />
      ),
      options: {
        headerShown: true,
        headerTitle: 'Settings',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    },
  ];

  return (
    <Tab.Navigator
      screenOptions={{
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
