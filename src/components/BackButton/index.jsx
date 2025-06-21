import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
const BackButton = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Pressable onPress={() => navigation.goBack()} style={styles.container}>
        <Icon name="arrow-back" size={24} color="red" />
        <Text style={styles.title}>Jobs</Text>
      </Pressable>
    </View>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  title: {
    marginLeft: 5,
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
