import { StyleSheet, View } from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';

const Error = () => {
  return (
    <View style={styles.container}>
      <LottieView
        source={require('../../assets/error.json')}
        autoPlay
        loop
        style={styles.lottie}
      />
    </View>
  );
};

export default Error;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lottie: {
    width: 200,
    height: 200,
  },
});
