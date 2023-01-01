import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Album({album}) {
  return (
    <View style={styles.container}>
      <Image source={{uri: album.imageUrl}} style={styles.image} />
      <View style={styles.infoBlock}>
        <Text style={styles.title}>{album.title}</Text>
        <View style={styles.artistYear}>
          <Text>{album.artist}</Text>
          <Text style={styles.year}>({album.year})</Text>
        </View>
      </View>
      {album.isSoldOut && (
        <View style={styles.soldOut}>
          <Text style={styles.soldOutText}>TÜKENDİ</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  image: {
    width: Dimensions.get('window').width * 0.25,
    height: Dimensions.get('window').width * 0.25,
    borderRadius: 120,
  },
  infoBlock: {
    marginHorizontal: 10,
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  artistYear: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  year: {
    color: 'gray',
    marginLeft: 5,
    fontSize: 10,
  },
  soldOut: {
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 4,
    padding: 6,
  },
  soldOutText: {
    color: 'red',
    fontSize: 10,
  },
});
