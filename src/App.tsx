import React from "react";
import { Card } from "./components/Card";
import { GestureHandlerRootView } from "react-native-gesture-handler";


export function App(){

   return(
      <GestureHandlerRootView style={{display:'flex',alignItems:'center',justifyContent:'center' ,backgroundColor:"#007801", height:'100%'}}>
	    <Card content="A"/>
      </GestureHandlerRootView>
   )
}
