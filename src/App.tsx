import {useEffect} from "react";
import {Canvas, Rect, mix, useSharedValueEffect, useValue} from "@shopify/react-native-skia";
import {useSharedValue, withRepeat, withTiming} from "react-native-reanimated";
import { Text } from "react-native/types";
 export default function App ()  {
  const x = useValue(0);
  const progress = useSharedValue(0);
 
  useEffect(() => {
    progress.value = withRepeat(withTiming(1, { duration: 3000 }), -1, true);
  }, [progress]);
 
  useSharedValueEffect(() => {
    x.current = mix(progress.value, 0, 100);
  }, progress); // you can pass other shared values as extra parameters
 
  return (
    <Canvas style={{ flex: 1 }}>
      <Rect
        x={x}
        y={100}
        width={50}
        height={50}
        color="red"
      />

    </Canvas>

  );
};
