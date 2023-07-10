import { Button, SafeAreaView, Text } from "react-native";
import auth from '@react-native-firebase/auth'

export function Home(){
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
