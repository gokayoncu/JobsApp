import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFavourite } from '../../context/slice/slice';

const FavouriteCard = ({ item }) => {
  const companyName = item?.company?.name || 'Company not specified';
  const jobTitle = item?.name || 'No title';
  const dispatch = useDispatch();
  const location =
    Array.isArray(item?.locations) && item.locations.length > 0
      ? item.locations.length > 1
        ? `${item.locations[0].name}  +${item.locations.length - 1}`
        : item.locations[0].name
      : 'Location not specified';

  if (!item) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{jobTitle}</Text>
      <Text style={styles.company}>{companyName}</Text>
      <Text style={styles.location}>{location}</Text>
      <View style={styles.button}>
        <Button
          title="Remove"
          color="red"
          onPress={() => dispatch(removeFavourite({ id: item.id }))}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 7,
    margin: 20,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  company: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  location: {
    fontSize: 14,
    color: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 10,
    backgroundColor: '#fec55b',
    alignSelf: 'flex-start',
    marginBottom: 8,
    overflow: 'hidden',
  },
  content: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },
});

export default FavouriteCard;
