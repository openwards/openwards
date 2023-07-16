import { useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth';
import { registerScreens } from './screen';
import { Navigation } from 'react-native-navigation';
import { View, Text } from 'react-native';
import { setAuthStackNavigation, setHomeStackNavigation } from './navigation';


export function start() {
  // Function to setup initial settings before run App component
  registerScreens();
  Navigation.events().registerAppLaunchedListener(() => {
    setHomeStackNavigation();
  });
};

