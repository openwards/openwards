import { useEffect, useState } from "react";
import { Button, SafeAreaView, TextInput } from "react-native";
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'

export function Register() {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  return (
    <SafeAreaView>
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
    </SafeAreaView>
  );
}
