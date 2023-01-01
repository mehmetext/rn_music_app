import {StyleSheet, FlatList, View} from 'react-native';
import React from 'react';
import Album from './Album';

export default function List({albums}) {
  const renderItem = item => {
    return <Album album={item.item} />;
  };

  return (
    <FlatList
      contentContainerStyle={styles.flatListContainer}
      data={albums}
      renderItem={renderItem}
      ItemSeparatorComponent={<View style={styles.separator} />}
    />
  );
}

const styles = StyleSheet.create({
  flatListContainer: {paddingBottom: 60},
  separator: {
    height: 2,
    marginVertical: 10,
    backgroundColor: '#efefef',
  },
});
