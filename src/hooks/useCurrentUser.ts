import { useEffect, useState } from "react";
import auth from '@react-native-firebase/auth'

export function useCurrentUser(): boolean {
  const [user, setUser] = useState<any>();

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged((user) => setUser(user));
    return subscriber;
  }, []);

  return user;
}
