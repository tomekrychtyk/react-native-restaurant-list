import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);

  const searchApi = async () => {
    const response = await yelp.get('/search', {
      params: {
        limit: 50,
        term,
        location: 'kraków',
      },
    });
    setResults(response.data.businesses);
  };

  return (
    <View>
      <Text>Search screen</Text>
      <SearchBar onTermSubmit={searchApi} term={term} onTermChange={setTerm} />

      <Text>We have found {results.length} restaurants.</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
export default SearchScreen;
