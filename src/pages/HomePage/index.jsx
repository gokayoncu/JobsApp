import { StyleSheet, View } from 'react-native';
import React from 'react';
import { useFetch } from '../../../hooks/useFetch';
import { FlatList } from 'react-native-gesture-handler';
import JobsCard from '../../components/JobsCard';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
const HomePage = () => {
  const { data, loading, error } = useFetch({ url: 'jobs', page: 20 });
  const renderItem = ({ item }) => <JobsCard item={item} />;
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={data?.results}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
