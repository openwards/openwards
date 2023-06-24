import { useEffect, useState } from 'react';
import {Text, SafeAreaView, View, TextInput, Button} from 'react-native'
import auth from '@react-native-firebase/auth';

export default function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  const [email, setEmail] = useState<String>();
  const [password, setPassword] = useState<String>();

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
      <View>
        <TextInput onChangeText={setPassword}>Welcome</TextInput>
        <TextInput onChangeText={setEmail}>Email</TextInput>
        <Button title='Sign in'/>
      </View>
    );
  }

  return (
    <View>Welcome {user}</View>
  );
}
