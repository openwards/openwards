import { useEffect, useState } from 'react';
import auth  from '@react-native-firebase/auth';
import { Register } from './screen/register/Register';
import { Home } from './screen/home/Home';

export default function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<any>();

  function onAuthStateChange(user: any){
      setUser(user);
    if(initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChange);
    return subscriber;
  }, []); 

  if(initializing) return null;

  if(!user){
    return (
      <Register/>
    );
  }

  return (
    <Home/>
  );
}
