import { useState } from "react";
import { Button, SafeAreaView, Text, TextInput } from "react-native";
import { Navigation } from "react-native-navigation";
import { supabase } from "../../config/supabase";

const auth = supabase.auth;

export function Login() {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  return (
    <SafeAreaView>
      <Text>Login</Text>
      <TextInput onChangeText={setEmail} placeholder="Email" />
      <TextInput secureTextEntry onChangeText={setPassword} placeholder="Password" />
      <Button title='Sign in' onPress={async () => {
        if (email && password && email !== "" && password !== "") {
          await auth.signInWithPassword({
            email: email, password: password
          });
        }
      }} />

      <Button title="Register" onPress={() => {
        Navigation.push('group.auth', {
          component: {
            name: "Register"
          }
        });
      }} />
    </SafeAreaView>);
}
