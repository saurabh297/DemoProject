import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import UserDetails from './src/UserDetails';
import UserList from './src/UserList';

const AppNavigator = createStackNavigator(
  {
    UserList,
    UserDetails
  },
  {
    initialRouteName: "UserList"
  }
);

export default createAppContainer(AppNavigator);
