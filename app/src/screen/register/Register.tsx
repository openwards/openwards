import { useState } from "react";
import { Button, SafeAreaView, Text, TextInput } from "react-native";
import { Navigation } from "react-native-navigation";
import { supabase } from "../../config/supabase";

const auth = supabase.auth;

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
          // WARN: To sign up we need provide a smtp server to send email
          await auth.signUp({ email: email, password: password});
        }
      }} />

      <Button title="Login" onPress={() => {
        Navigation.popToRoot(props.componentId);
      }} />

    </SafeAreaView>
  );
}
