import { Button, SafeAreaView, Text } from "react-native";
import { setAuthStackNavigation } from "../../navigation";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import { supabase } from "../../config/supabase";

const auth = supabase.auth;

export function Home(){
  const user = useCurrentUser();
  console.log(user);
  if (user === null) {
    setAuthStackNavigation();
  }

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Welcome</Text>
      <Button title="Log out" onPress={async () => {
        // after sign out
        auth.signOut();
      }}/>
    </SafeAreaView>
  );
}
