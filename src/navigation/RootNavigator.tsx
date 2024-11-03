import React from 'react';
import {DefaultTemplate} from '../App';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import {StyleSheet} from 'react-native';
import {HomeScreen} from '../features/home/HomeScreen';
import {AppText} from '../components/AppText';

const Tab = createBottomTabNavigator();

export const RootNavigator = () => {
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
      <Tab.Screen
        options={() => ({
          tabBarIcon: ({color}) => (
            <Feather name="home" style={styles.icon} color={color} />
          ),
        })}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color}) => (
            <Feather name="pie-chart" style={styles.icon} color={color} />
          ),
        }}
        name="Statistics"
        component={DefaultTemplate}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color}) => (
            <Feather name="settings" style={styles.icon} color={color} />
          ),
        }}
        name="Settings"
        component={DefaultTemplate}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  icon: {
    fontSize: 20,
  },
});
