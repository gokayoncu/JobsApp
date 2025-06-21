import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import RenderHTML from 'react-native-render-html';
import { useWindowDimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import { addFavourite } from '../../context/slice/slice';
const DetailPage = ({ route }) => {
  const { item } = route.params;
  const { width } = useWindowDimensions();
  const dispatch = useDispatch();
  const isFavourite = useSelector(state =>
    state.jobs.favourites.some(job => job.id === item.id),
  );
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.JobInfoContainer}>
          <Text style={styles.title}>{item.name}</Text>
          <View style={styles.Jobİnfo}>
            <Text style={[styles.Jobİnfo, styles.redText]}>Locations: </Text>
            <Text style={styles.Jobİnfo}>{item.locations[0].name}</Text>
          </View>
          <View style={styles.Jobİnfo}>
            <Text style={[styles.Jobİnfo, styles.redText]}>Levels: </Text>
            <Text style={styles.Jobİnfo}>{item.levels[0].name}</Text>
          </View>
        </View>
        <Text style={styles.headerTitle}>Jobs Details</Text>
        <View style={styles.contentContainer}>
          <RenderHTML
            contentWidth={width}
            source={{ html: item.contents }}
            baseStyle={styles.content}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} color="red">
          <Icon name="send" size={18} color="white" />
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.disabledButton]}
          color="red"
          onPress={() => dispatch(addFavourite(item))}
          disabled={isFavourite}
        >
          <Icon name="heart" size={20} color={isFavourite ? 'red' : 'white'} />
          {isFavourite ? (
            <Text style={styles.disabledButton}>Favourite</Text>
          ) : (
            <Text style={styles.buttonText}>Favorite Job</Text>
          )}
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default DetailPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#37474f',
    marginBottom: 10,
  },
  JobInfoContainer: {
    marginLeft: 10,
    marginTop: 5,
  },
  Jobİnfo: {
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 16,
    color: '#000',
  },
  redText: {
    color: 'red',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#37474f',
    marginTop: 10,
    textAlign: 'center',
  },
  contentContainer: {
    borderColor: 'gray',
    backgroundColor: 'white',
    borderWidth: 1,
    marginTop: 10,
    padding: 10,
  },
  content: {
    color: '#000',
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-around',
  },
  button: {
    backgroundColor: 'red',
    flexDirection: 'row',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    minWidth: '40%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },
  disabledButton: {
    backgroundColor: 'gray',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17,
  },
});
