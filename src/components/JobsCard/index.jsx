import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import RenderHTML from 'react-native-render-html';
import useTruncatedHtml from '../../../hooks/useTruncatedHtml';
import { useNavigation } from '@react-navigation/native';

const JobsCard = ({ item }) => {
  const { width } = useWindowDimensions();
  const navigation = useNavigation();
  const companyName = item.company?.name || 'Company not specified';
  const jobTitle = item.name || 'No title';
  const location =
    Array.isArray(item.locations) && item.locations.length > 0
      ? item.locations.length > 1
        ? `${item.locations[0].name}  +${item.locations.length - 1}`
        : item.locations[0].name
      : 'Location not specified';
  const truncatedContent = useTruncatedHtml(item.contents, 100);
  const handleDetailPage = () => {
    navigation.navigate('DetailPage', { item });
  };
  return (
    <TouchableOpacity style={styles.container} onPress={handleDetailPage}>
      <Text style={styles.title}>{jobTitle}</Text>
      <Text style={styles.company}>{companyName}</Text>
      <Text style={styles.location}>{location}</Text>
      <RenderHTML
        contentWidth={width}
        source={{ html: truncatedContent }}
        baseStyle={styles.content}
      />
      <Text style={styles.levels}>{item.levels[0].name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 15,
    margin: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 18,
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
    fontSize: 16,
    color: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 10,
    backgroundColor: '#fec55b',
    borderColor: '#fec55b',
    borderWidth: 1,
    marginBottom: 8,
    alignSelf: 'flex-start',
    overflow: 'hidden',
  },
  content: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },
  levels: {
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 20,
    textAlign: 'right',
    color: '#e04e50',
    marginTop: 5,
  },
});

export default JobsCard;
