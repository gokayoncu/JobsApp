import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Text } from 'react-native';
import { useSelector } from 'react-redux';
import { FlatList } from 'react-native-gesture-handler';
import FavouriteCard from '../../components/FavouriteCard';

const FavouritePage = () => {
  const { favourites } = useSelector(state => state.jobs);

  return (
    <View style={styles.container}>
      {favourites.length > 0 ? (
        <FlatList
          data={favourites}
          renderItem={({ item }) => <FavouriteCard item={item} />}
          keyExtractor={item => item.id}
        />
      ) : (
        <View style={styles.textContainer}>
          <Text style={styles.text}>You haven't added any favourite jobs</Text>
        </View>
      )}
    </View>
  );
};

export default FavouritePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
