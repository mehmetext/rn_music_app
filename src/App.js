import {SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import Search from './components/Search';
import List from './components/List';

import data from './data.json';

export default function App() {
  const [albums, setAlbums] = useState(data);
  const [searching, setSearching] = useState('');

  const handleChange = text => {
    setSearching(text);
    let filtered = data;
    if (text.trim() !== '') {
      filtered = data.filter(
        album =>
          album.title.toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
          album.artist.toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
          album.year
            .toString()
            .toLocaleLowerCase()
            .includes(text.toLocaleLowerCase()) ||
          album.album.toLocaleLowerCase().includes(text.toLocaleLowerCase()),
      );
    } else {
      filtered = data;
    }

    setAlbums(filtered);
  };

  return (
    <SafeAreaView>
      <Search searching={searching} handleChange={handleChange} />
      <List albums={albums} />
    </SafeAreaView>
  );
}
