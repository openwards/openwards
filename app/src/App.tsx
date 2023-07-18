import { registerScreens } from './screen';
import { Navigation } from 'react-native-navigation';
import { setHomeStackNavigation } from './navigation';


export function start() {
  // Function to setup initial settings before run App component
  registerScreens();
  Navigation.events().registerAppLaunchedListener(() => {
    setHomeStackNavigation();
  });
};
