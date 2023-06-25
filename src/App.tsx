import { useEffect, useState } from 'react';
import {Text, SafeAreaView, View, TextInput, Button} from 'react-native'
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

export default function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<any>();

  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

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
        <TextInput onChangeText={setEmail} placeholder="Email"/>
        <TextInput secureTextEntry onChangeText={setPassword} placeholder="Password"/>
        <Button title='Sign in' onPress={async () => {
          if(email && password && email !== "" && password !== ""){
            try {
              await auth().createUserWithEmailAndPassword(email, password);
            }catch(error){
              console.log(error);
              let authError: FirebaseAuthTypes.NativeFirebaseAuthError = error as FirebaseAuthTypes.NativeFirebaseAuthError
              switch(authError.code){
                case "auth/email-already-in-use": 
                  break;
              }
            }
          }
        }}/>
      </View>
    );
  }

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Welcome {user.email}</Text>
    </View>
  );
}
