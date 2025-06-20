import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Text } from 'react-native';

const FavouritePage = () => {
  return (
    <View style={styles.container}>
      <Text>FavouritePage</Text>
    </View>
  );
};

export default FavouritePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
