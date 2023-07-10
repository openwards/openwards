/**
 * @format
 */

import App from './src/App';
import { Navigation } from "react-native-navigation";

start = () => {
  Navigation.registerComponent('com.openwards', () => App);
  Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
      root: {
        stack: {
          children: [
            {
              component: {
                name: "com.openwards"
              }
            }
          ]
        }
      }
    })
  });

}

start();



