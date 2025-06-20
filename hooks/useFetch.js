import axios from 'axios';
import { useEffect, useState, useCallback } from 'react';
import Config from 'react-native-config';
export const useFetch = ({ url, page }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(Config.API_URL + url + `?page=${page}`);
      setData(response.data);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  }, [url, page]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error };
};
