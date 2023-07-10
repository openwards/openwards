import { useEffect, useState } from "react";
import { Button, SafeAreaView, Text, TextInput } from "react-native";
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'
import { Navigation } from "react-native-navigation";

export function Register(props) {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  return (
    <SafeAreaView>
      <Text>Register</Text>
      <TextInput onChangeText={setEmail} placeholder="Email" />
      <TextInput secureTextEntry onChangeText={setPassword} placeholder="Password" />
      <Button title='Sign in' onPress={async () => {
        if (email && password && email !== "" && password !== "") {
          try {
            await auth().createUserWithEmailAndPassword(email, password);
          } catch (error) {
            console.log(error);
            let authError: FirebaseAuthTypes.NativeFirebaseAuthError = error as FirebaseAuthTypes.NativeFirebaseAuthError
            switch (authError.code) {
              case "auth/email-already-in-use":
                break;
            }
          }
        }
      }} />

      <Button title="Login" onPress={() => {
        Navigation.popToRoot(props.componentId);
      }}/>
 
    </SafeAreaView>
  );
}
