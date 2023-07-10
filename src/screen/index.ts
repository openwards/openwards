import { Navigation } from "react-native-navigation";
import { Auth } from "./auth/Auth";
import { Home } from "./home/Home";
import { Login } from "./login/Login";
import { Register } from "./register/Register";

export function registerScreens(){
  Navigation.registerComponent('Home', () => Home);
  Navigation.registerComponent('Login', () => Login);
  Navigation.registerComponent('Register', () => Register)
  Navigation.registerComponent('Auth', () => Auth)
}
