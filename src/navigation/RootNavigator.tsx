import React from 'react';
import {DefaultTemplate} from '../App';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import {StyleSheet} from 'react-native';

const Tab = createBottomTabNavigator();

export const RootNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Feather name="home" style={styles.icon} color={color} />
          ),
        }}
        name="Home"
        component={DefaultTemplate}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Feather name="pie-chart" style={styles.icon} color={color} />
          ),
        }}
        name="Statistics"
        component={DefaultTemplate}
      />
      <Tab.Screen
        options={{
          headerShown: false,
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
