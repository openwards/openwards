import { Button, SafeAreaView, Text } from "react-native";
import { setAuthStackNavigation } from "../../navigation";
import auth from '@react-native-firebase/auth'
import { useCurrentUser } from "../../hooks/useCurrentUser";

export function Home(){
  const user = useCurrentUser();

  if (user === null) {
    setAuthStackNavigation();
  }

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Welcome</Text>
      <Button title="Log out" onPress={async () => {
        // after sign out
        await auth().signOut();
      }}/>
    </SafeAreaView>
  );
}
