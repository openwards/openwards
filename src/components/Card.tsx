import { View, Text, Dimensions, } from "react-native";
import React from "react";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { styleCard, styleCardFront, styleTextCardBack, styleTextCardFront} from "../styles/card/Card";


interface CardProps{
      content:string
   }
export function Card (content:CardProps):React.ReactElement<CardProps>{

  const spin = useSharedValue<number>(0);	

  const back = useAnimatedStyle(() => {
    const spinVal = interpolate(spin.value, [0, 1], [0, 180]);
    return {
      transform: [
        {
          rotateY: withTiming(`${spinVal}deg`, { duration: 800 }),
        },

      ],
    };
  }, []);

  const front = useAnimatedStyle(() => {
    const spinVal = interpolate(spin.value, [0, 1], [180, 360]);
    console.log(spinVal)
    return {
      transform: [
        {
          rotateY: withTiming(`${spinVal}deg`, { duration: 800 }),
        },


      ],
    };
  }, []);



  return (
      <View >
	 <TouchableWithoutFeedback onPress={() =>{(spin.value =spin.value ? 0 : 1)}}>
	       <Animated.View style={[styleCard,back]}>
		  <Text style={styleTextCardBack} >Openwards</Text>
	       </Animated.View>
	       <Animated.View  style={[styleCardFront, front]}>
		  <Text style={styleTextCardFront}>{content.content}</Text>
	       </Animated.View>
	 </TouchableWithoutFeedback>
      </View>
  );
};


