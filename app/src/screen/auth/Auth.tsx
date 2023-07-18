import { useCurrentUser } from "../../hooks/useCurrentUser";
import { setHomeStackNavigation } from "../../navigation";
import { Login } from "../login/Login";

export function Auth(){
  const user = useCurrentUser();

  if (user) {
    setHomeStackNavigation();
  }

  return <Login/>;
}
