import { useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth';
import { registerScreens } from './screen';
import { Navigation } from 'react-native-navigation';
import { View, Text } from 'react-native';


export function start() {
  // Function to setup initial settings before run App component
  registerScreens();
};

export function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<any>();

  function onAuthStateChange(user: any) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChange);
    return subscriber;
  }, []);

  if (initializing) return <View><Text>Initializing firebase...</Text></View>
  
  if (!user) {
    Navigation.setRoot({
      root: {
        stack: {
          options: {
            statusBar: {
              visible: false,
            }
          },
          children: [
            {
              component: {
                name: "Login"
              }
            }
          ]
        }
      }
    });
  } else {
    Navigation.setRoot({
      root: {
        component: {
          name: "Home"
        }
      }
    });
  }

}
