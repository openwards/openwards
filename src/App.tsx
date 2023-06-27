import React, { useRef, useState } from 'react';
import { View, Animated, TouchableOpacity, Text, StyleSheet } from 'react-native';

const App = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const flipAnimation = useRef(new Animated.Value(0)).current;

  const handleFlip = () => {
    Animated.timing(flipAnimation, {
      toValue: isFlipped ? 0 : 180,
      duration: 50,
      useNativeDriver: true,
    }).start(() => setIsFlipped(!isFlipped));
  };

  const frontInterpolate = flipAnimation.interpolate({
    inputRange: [0, 100],
    outputRange: ['0deg', '180deg'],
  });
  const backInterpolate = flipAnimation.interpolate({
    inputRange: [0, 180],
    outputRange: ['180deg', '360deg'],
  });

  const frontAnimatedStyle = {
    transform: [{ rotateY: frontInterpolate }],
  };
  const backAnimatedStyle = {
    transform: [{ rotateY: backInterpolate }],
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleFlip}>
        <Animated.View style={[styles.cardContainer, frontAnimatedStyle]}>
          <Text style={styles.cardText}>Front</Text>
        </Animated.View>
        <Animated.View style={[styles.cardContainer, styles.cardBack, backAnimatedStyle]}>
          <Text style={styles.cardText}>Back</Text>
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    width: 200,
    height: 300,
    backgroundColor: 'blue',
    backfaceVisibility: 'hidden',
    borderRadius:10
  },
  cardBack: {
    backgroundColor: 'red',
    position: 'absolute',
    top: 0,
  },
  cardText: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    marginTop: 50,
  },
});

export default App;
